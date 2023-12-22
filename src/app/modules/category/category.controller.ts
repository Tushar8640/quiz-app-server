import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {createCategoryService, deleteCategoryService, getAllCategorieService, getSingleCategoryService, updateCategoryService} from "./category.service";

export const createCategory = catchAsync(async (req, res) => {
  const category = await createCategoryService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Category created successfully!",
    data: category,
  });
});

export const getAllCategories = catchAsync(async (req, res) => {
  const categories = await getAllCategorieService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories retrieved successfully!",
    data: categories,
  });
});

export const getSingleCategory = catchAsync(async (req, res) => {
  const category = await getSingleCategoryService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully!",
    data: category,
  });
});

export const updateCategory = catchAsync(async (req, res) => {
  const {
    body,
    params: {id},
  } = req;
  const updatedCategory = await updateCategoryService(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category updated successfully!",
    data: updatedCategory,
  });
});

export const deleteCategory = catchAsync(async (req, res) => {
  const category = await deleteCategoryService(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category deleted successfully!",
    data: category,
  });
});
