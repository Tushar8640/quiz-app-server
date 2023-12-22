import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {createQuizService, deleteQuizService, getAllQuizService, getQuizByCategoryService, getSingleQuizService, updateQuizService} from "./quiz.service";

export const createQuiz = catchAsync(async (req, res) => {
  const quiz = await createQuizService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "quiz created successfully!",
    data: quiz,
  });
});

export const getQuizByCategory = catchAsync(async (req, res) => {
  const quizes = await getQuizByCategoryService(req?.params?.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quizes retrieved successfully!",
    data: quizes,
  });
});
export const getAllQuiz = catchAsync(async (req, res) => {
  const quizes = await getAllQuizService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quizes retrieved successfully!",
    data: quizes,
  });
});

export const getSingleQuiz = catchAsync(async (req, res) => {
  const quiz = await getSingleQuizService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quiz retrieved successfully!",
    data: quiz,
  });
});

export const updateQuiz = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const result = await updateQuizService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quiz updated successfully!",
    data: result,
  });
});

export const deleteQuiz = catchAsync(async (req, res) => {
  const quiz = await deleteQuizService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quiz deleted successfully!",
    data: quiz,
  });
});
