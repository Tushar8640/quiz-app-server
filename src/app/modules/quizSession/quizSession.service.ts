import {QuizSession} from "@prisma/client";
import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import {ApiError} from "../../../handleErrors/ApiError";
//create quizSession
export const createQuizSessionService = async (payload: QuizSession): Promise<QuizSession> => {
  const quizSession = await prisma.quizSession.create({
    data: payload,
  });
  return quizSession;
};
//get all quizSession
export const getAllQuizSessionService = async (): Promise<QuizSession[]> => {
  const quizSessions = await prisma.quizSession.findMany({
    include: {
      quiz: true,
      user: true,
    },
  });
  return quizSessions;
};
//get all quiz Session by performer
export const getQuizSessionByPerformerService = async (performer: string): Promise<QuizSession[]> => {
  const quizSessions = await prisma.quizSession.findMany({
    where: {
      performer,
    },
    include: {
      user: true,
      quiz: true,
    },
  });
  return quizSessions;
};
//get single quiz Session
export const getSingleQuizSessionService = async (id: string): Promise<QuizSession | null> => {
  const quizSession = await prisma.quizSession.findUnique({
    where: {
      id,
    },
  });

  if (!quizSession) {
    throw new ApiError(httpStatus.NOT_FOUND, "quizSession not found");
  }

  return quizSession;
};
//update Session
export const updateQuizSessionService = async (id: string, payload: Partial<QuizSession>): Promise<QuizSession | null> => {
  const quizSession = await prisma.quizSession.findUnique({
    where: {
      id,
    },
  });

  if (!quizSession) {
    throw new ApiError(httpStatus.NOT_FOUND, "quizSession not found");
  }

  const result = await prisma.quizSession.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
//delete Session
export const deleteQuizSessionService = async (id: string): Promise<QuizSession | null> => {
  const quizSession = await prisma.quizSession.findUnique({
    where: {
      id,
    },
  });

  if (!quizSession) {
    throw new ApiError(httpStatus.NOT_FOUND, "quizSession not found");
  }

  await prisma.quizSession.delete({
    where: {
      id,
    },
  });

  return quizSession;
};
