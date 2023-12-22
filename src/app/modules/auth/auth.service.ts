import httpStatus from "http-status";
import config from "../../../config/index";
import {ApiError} from "../../../handleErrors/ApiError";
import {ILoginResponse, ILoginUser, IRefreshTokenResponse} from "./auth.interface";
import {createToken, verifyToken} from "../../../shared/jwtHelpers";
import {Secret} from "jsonwebtoken";
import {User} from "@prisma/client";
import prisma from "../../../shared/prisma";
import {hashingPassword} from "./auth.utils";
import bcrypt from "bcrypt";
//----------create user or sign up
export const createUserService = async (user: User): Promise<Partial<User> | null> => {
  const {password, email, ...userData} = user;

  const isUserExist = await prisma.user.findUnique({
    where: {email},
  });

  if (isUserExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User already exists");
  }

  const hashedPassword = await hashingPassword(password);

  const newUser = await prisma.user.create({
    data: {password: hashedPassword, email, ...userData},
  });

  return newUser;
};

//--------user login
export const loginUserService = async (payload: ILoginUser): Promise<ILoginResponse> => {
  const {email, password} = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {email},
  });
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't found");
  }

  if (isUserExist.password && !(await bcrypt.compare(password, isUserExist.password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect");
  }
  //create accesstoken & refresh token
  const {id: userId, role} = isUserExist;
  const accessToken = createToken({userId, role}, config.jwt.secret as Secret, {
    expiresIn: config.jwt.expires_in,
  });

  const refreshToken = createToken({userId, role}, config.jwt.refresh_secret as Secret, {expiresIn: config.jwt.refresh_expires_in});

  return {
    accessToken,
    refreshToken,
  };
};
///
export const refreshTokenService = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = verifyToken(token, config.jwt.refresh_secret as Secret);
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid refresh token");
  }
  const {userId, role} = verifiedToken;

  // check if user exists
  const isUserExist = await prisma.user.findUnique({
    where: {id: userId},
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  //generate new token
  const newAccessToken = createToken(
    {
      id: isUserExist.id,
      role: isUserExist.role,
    },
    config.jwt.refresh_secret as Secret,
    {expiresIn: config.jwt.refresh_expires_in}
  );

  return {
    accessToken: newAccessToken,
  };
};
