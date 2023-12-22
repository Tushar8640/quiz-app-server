import {z} from "zod";

export const createQuizSessionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    performer: z.string().nonempty({
      message: "performer is required",
    }),
    quizid: z.string().nonempty({
      message: "quizid is required",
    }),
  }),
});
export const updateQuizSessionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    performer: z.string().optional(),
    quizid: z.string().optional(),
    score: z.number().optional(),
  }),
});

export const deleteQuizSessionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
});
