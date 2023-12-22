import {User} from "@prisma/client";
import prisma from "../../../shared/prisma";
import httpStatus from "http-status";
import {ENUM_USER_ROLE} from "../../../enums/user";
import {ApiError} from "../../../handleErrors/ApiError";
//get all user
export const getAllUserService = async (): Promise<Array<User>> => {
  const users = await prisma.user.findMany();
  return users;
};
//get user by id
export const getUserByIdService = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {id},
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  return user;
};
//get user profile
export const getUserProfileService = async (user: {userId: string; role: ENUM_USER_ROLE}): Promise<User | null> => {
  if (!user.userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "Access denied");
  }

  const specificUser = await prisma.user.findUnique({
    where: {
      id: user.userId,
    },
  });

  if (!specificUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found!");
  }

  return specificUser;
};
//update user
export const updateUserService = async (id: string, payload: Partial<User>): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  const updatedUser = prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });

  return updatedUser;
};
//delete user
export const deleteUserService = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
};
//make admin
export const makeAdminService = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      role: "admin",
    },
  });

  return updatedUser;
};
