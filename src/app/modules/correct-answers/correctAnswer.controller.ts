import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {createAnswerService, deleteAnswerService, getAnswerByQuestionService, updateAnswerService} from "./correctAnswer.service";

export const createAnswer = catchAsync(async (req, res) => {
  const answer = await createAnswerService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "answer created successfully!",
    data: answer,
  });
});

export const getAnswerByQuestion = catchAsync(async (req, res) => {
  const answers = await getAnswerByQuestionService(req?.params?.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "answers retrieved successfully!",
    data: answers,
  });
});

// export const getSingleCategory = catchAsync(async (req, res) => {
//   const category = await getSingleCategoryService(req.params.id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Category retrieved successfully!",
//     data: category,
//   });
// });

export const updateAnswer = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const result = await updateAnswerService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "answer updated successfully!",
    data: result,
  });
});

export const deleteAnswer = catchAsync(async (req, res) => {
  const answer = await deleteAnswerService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "answer deleted successfully!",
    data: answer,
  });
});
