import {Request, Response} from "express";
import {createUserService, loginUserService, refreshTokenService} from "./auth.service";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import httpStatus from "http-status";
import config from "../../../config";
import {ILoginResponse, IRefreshTokenResponse} from "./auth.interface";
import {User} from "@prisma/client";

//-----create a new user
export const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const newUser = await createUserService(user);
  sendResponse<Partial<User>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Signed up successfully!",
    data: newUser,
  });
});
///--------login user
export const loginUser = catchAsync(async (req: Request, res: Response) => {
  //
  const data = req?.body;
  const result = await loginUserService(data);
  const {refreshToken, accessToken} = result;
  //set refresh token into cookie
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);
  res.status(httpStatus.OK).json({
    statusCode: 200,
    success: true,
    message: "User logged in successfully!",
    token: accessToken,
  });
});

export const refreshToken = catchAsync(async (req: Request, res: Response) => {
  //

  const {refreshToken} = req.cookies;
  const result = await refreshTokenService(refreshToken);
  //set refresh token into cookie
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);
  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Refresh token generated successfully!",
    data: result,
  });
});
