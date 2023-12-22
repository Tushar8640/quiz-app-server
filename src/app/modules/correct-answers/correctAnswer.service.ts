import {CorrectAnswer} from "@prisma/client";
import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import {ApiError} from "../../../handleErrors/ApiError";
//create answer
export const createAnswerService = async (payload: CorrectAnswer): Promise<CorrectAnswer> => {
  const answer = await prisma.correctAnswer.create({
    data: payload,
  });
  return answer;
};
//get all answer by question
export const getAnswerByQuestionService = async (questionId: string): Promise<CorrectAnswer[]> => {
  const answers = await prisma.correctAnswer.findMany({
    where: {
      questionId,
    },
    include: {
      question: true,
    },
  });
  return answers;
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
//update answer
export const updateAnswerService = async (id: string, payload: Partial<CorrectAnswer>): Promise<CorrectAnswer | null> => {
  const answer = await prisma.correctAnswer.findUnique({
    where: {
      id,
    },
  });

  if (!answer) {
    throw new ApiError(httpStatus.NOT_FOUND, "Answer not found");
  }

  const result = await prisma.correctAnswer.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
//delete answer
export const deleteAnswerService = async (id: string): Promise<CorrectAnswer | null> => {
  const answer = await prisma.correctAnswer.findUnique({
    where: {
      id,
    },
  });

  if (!answer) {
    throw new ApiError(httpStatus.NOT_FOUND, "Answer not found");
  }

  await prisma.correctAnswer.delete({
    where: {
      id,
    },
  });

  return answer;
};
