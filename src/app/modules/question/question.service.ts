import {Prisma, Question} from "@prisma/client";
import prisma from "../../../shared/prisma";
import {ApiError} from "../../../handleErrors/ApiError";
import httpStatus from "http-status";
//create question
export const createQuestionService = async (payload: Question): Promise<Question> => {
  const question = await prisma.question.create({
    data: payload,
  });
  return question;
};
//get all question
export const getAllQuestionService = async (): Promise<Question[]> => {
  const questions = await prisma.question.findMany({});

  return questions;
};
//get questions by category
export const getQuestionByCategoryService = async (categoryId: string): Promise<Question[]> => {
  const books = await prisma.question.findMany({
    where: {
      categoryId,
    },
    include: {
      category: true,
    },
  });
  return books;
};
//get single question
export const getSingleQuestionService = async (id: string): Promise<Question | null> => {
  const question = await prisma.question.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, "Question not found");
  }

  return question;
};
//update question
export const updateQuestionService = async (id: string, payload: Partial<Question>): Promise<Question | null> => {
  const question = await prisma.question.findUnique({
    where: {
      id,
    },
  });

  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, "Question not found");
  }

  const updatedQuestion = await prisma.question.update({
    where: {
      id,
    },
    data: payload,
  });

  return updatedQuestion;
};
//delete question
export const deleteQuestionService = async (id: string): Promise<Question | null> => {
  const question = await prisma.question.findUnique({
    where: {
      id,
    },
  });

  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, "Question not found");
  }

  await prisma.question.delete({
    where: {
      id,
    },
  });

  return question;
};
