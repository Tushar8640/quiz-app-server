import {Option} from "@prisma/client";
import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import {ApiError} from "../../../handleErrors/ApiError";
//create Option
export const createOptionService = async (payload: Option): Promise<Option> => {
  const option = await prisma.option.create({
    data: payload,
  });
  return option;
};
//get all option by question
export const getOptionByQuestionService = async (questionId: string): Promise<Option[]> => {
  const options = await prisma.option.findMany({
    where: {
      questionId,
    },
    include: {
      question: true,
    },
  });
  return options;
};
// //get single category
// export const getSingleAnswerService = async (id: string): Promise<CorrectAnswer | null> => {
//   const category = await prisma.category.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       question: true,
//     },
//   });

//   if (!category) {
//     throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
//   }

//   return category;
// };
//update option
export const updateOptionService = async (id: string, payload: Partial<Option>): Promise<Option | null> => {
  const option = await prisma.option.findUnique({
    where: {
      id,
    },
  });

  if (!option) {
    throw new ApiError(httpStatus.NOT_FOUND, "option not found");
  }

  const result = await prisma.option.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
//delete option
export const deleteOptionService = async (id: string): Promise<Option | null> => {
  const option = await prisma.option.findUnique({
    where: {
      id,
    },
  });

  if (!option) {
    throw new ApiError(httpStatus.NOT_FOUND, "option not found");
  }

  await prisma.option.delete({
    where: {
      id,
    },
  });

  return option;
};
