import {Quiz} from "@prisma/client";
import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import {ApiError} from "../../../handleErrors/ApiError";
//create quiz
export const createQuizService = async (payload: Quiz): Promise<Quiz> => {
  const quiz = await prisma.quiz.create({
    data: payload,
  });
  return quiz;
};
//get all quiz
export const getAllQuizService = async (): Promise<Quiz[]> => {
  const quizes = await prisma.quiz.findMany({
    include: {
      category: true,
    },
  });
  return quizes;
};
//get all quiz by category
export const getQuizByCategoryService = async (categoryId: string): Promise<Quiz[]> => {
  const quizes = await prisma.quiz.findMany({
    where: {
      categoryId,
    },
    include: {
      category: true,
    },
  });
  return quizes;
};
//get single quiz
export const getSingleQuizService = async (id: string): Promise<Quiz | null> => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id,
    },
  });

  if (!quiz) {
    throw new ApiError(httpStatus.NOT_FOUND, "quiz not found");
  }

  return quiz;
};
//update option
export const updateQuizService = async (id: string, payload: Partial<Quiz>): Promise<Quiz | null> => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id,
    },
  });

  if (!quiz) {
    throw new ApiError(httpStatus.NOT_FOUND, "quiz not found");
  }

  const result = await prisma.quiz.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
//delete option
export const deleteQuizService = async (id: string): Promise<Quiz | null> => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id,
    },
  });

  if (!quiz) {
    throw new ApiError(httpStatus.NOT_FOUND, "quiz not found");
  }

  await prisma.quiz.delete({
    where: {
      id,
    },
  });

  return quiz;
};
