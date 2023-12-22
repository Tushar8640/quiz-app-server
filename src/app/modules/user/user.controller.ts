/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {deleteUserService, getAllUserService, getUserByIdService, getUserProfileService, makeAdminService, updateUserService} from "./user.service";

export const getAllUsers = catchAsync(async (req, res) => {
  const users = await getAllUserService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: users,
    message: "Users retrieved successfully!",
  });
});

export const getUserById = catchAsync(async (req, res) => {
  const user = await getUserByIdService(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: user,
    message: "User retrieved successfully!",
  });
});

export const getUserProfile = catchAsync(async (req, res) => {
  const user = await getUserProfileService((req as any).user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: user,
    message: "User retrieved successfully!",
  });
});

export const updateUser = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const user = await updateUserService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: user,
    message: "User updated successfully!",
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const user = await deleteUserService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: user,
    message: "User deleted successfully!",
  });
});

export const makeAdmin = catchAsync(async (req, res) => {
  const user = await makeAdminService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: user,
    message: "User assigned role as admin successfully!",
  });
});
