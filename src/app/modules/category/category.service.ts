import {Category} from "@prisma/client";
import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import {ApiError} from "../../../handleErrors/ApiError";
//create category
export const createCategoryService = async (payload: Category): Promise<Category> => {
  const category = await prisma.category.create({
    data: payload,
  });
  return category;
};
//get all category
export const getAllCategorieService = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany({
    include: {
      questions: true,
    },
  });
  return categories;
};
//get single category
export const getSingleCategoryService = async (id: string): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      questions: true,
    },
  });

  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }

  return category;
};
//update category
export const updateCategoryService = async (id: string, payload: Partial<Category>): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }

  const updatedCategory = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });

  return updatedCategory;
};
//delete category
export const deleteCategoryService = async (id: string): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }

  await prisma.category.delete({
    where: {
      id,
    },
  });

  return category;
};
