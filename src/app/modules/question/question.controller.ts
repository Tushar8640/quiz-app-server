import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";

import {sendResponse} from "../../../shared/sendResponse";
import {createQuestionService, deleteQuestionService, getAllQuestionService, getQuestionByCategoryService, getSingleQuestionService, updateQuestionService} from "./question.service";
//create Question
export const createQuestion = catchAsync(async (req, res) => {
  const Question = await createQuestionService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Question created successfully!",
    data: Question,
  });
});
//get all Questions
export const getAllQuestions = catchAsync(async (req, res) => {
  const question = await getAllQuestionService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Questions retrieved successfully!",
    data: question,
  });
});
//get Questions by category
export const getQuestionByCategory = catchAsync(async (req, res) => {
  const questions = await getQuestionByCategoryService(req.params.categoryId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Questions retrieved successfully!",
    data: questions,
  });
});

//get single question
export const getSingleQuestion = catchAsync(async (req, res) => {
  const question = await getSingleQuestionService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Question retrieved successfully!",
    data: question,
  });
});
//update question
export const updateQuestion = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const question = await updateQuestionService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Question updated successfully!",
    data: question,
  });
});
//--delete question
export const deleteQuestion = catchAsync(async (req, res) => {
  const question = await deleteQuestionService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Question deleted successfully!",
    data: question,
  });
});
