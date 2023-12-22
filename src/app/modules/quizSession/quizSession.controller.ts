import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {createQuizSessionService, deleteQuizSessionService, getAllQuizSessionService, getQuizSessionByPerformerService, getSingleQuizSessionService, updateQuizSessionService} from "./quizSession.service";

export const createQuizSession = catchAsync(async (req, res) => {
  const quizSession = await createQuizSessionService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "quizSession created successfully!",
    data: quizSession,
  });
});

export const getQuizSessionByPerformer = catchAsync(async (req, res) => {
  const quizSessions = await getQuizSessionByPerformerService(req?.params?.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quizSessions retrieved successfully!",
    data: quizSessions,
  });
});
export const getAllQuizSession = catchAsync(async (req, res) => {
  const quizSessions = await getAllQuizSessionService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quizSessions retrieved successfully!",
    data: quizSessions,
  });
});

export const getSingleQuizSession = catchAsync(async (req, res) => {
  const quizSession = await getSingleQuizSessionService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quizSession retrieved successfully!",
    data: quizSession,
  });
});

export const updateQuizSession = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const result = await updateQuizSessionService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quizSession updated successfully!",
    data: result,
  });
});

export const deleteQuizSession = catchAsync(async (req, res) => {
  const quizSession = await deleteQuizSessionService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "quizSession deleted successfully!",
    data: quizSession,
  });
});
