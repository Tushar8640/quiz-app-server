import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {createOptionService, deleteOptionService, getOptionByQuestionService, updateOptionService} from "./option.service";

export const createOption = catchAsync(async (req, res) => {
  const option = await createOptionService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "option created successfully!",
    data: option,
  });
});

export const getOptionByQuestion = catchAsync(async (req, res) => {
  const options = await getOptionByQuestionService(req?.params?.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "options retrieved successfully!",
    data: options,
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

export const updateOption = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const result = await updateOptionService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "option updated successfully!",
    data: result,
  });
});

export const deleteOption = catchAsync(async (req, res) => {
  const option = await deleteOptionService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "option deleted successfully!",
    data: option,
  });
});
