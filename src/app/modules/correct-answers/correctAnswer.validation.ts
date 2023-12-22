import {z} from "zod";

export const createAnswerZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    answer: z.string().nonempty({
      message: "answer is required",
    }),
    questionId: z.string().nonempty({
      message: "questionId is required",
    }),
  }),
});
export const updateAnswerZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    answer: z.string().nonempty().optional(),
    questionId: z.string().nonempty().optional(),
  }),
});

export const deleteAnswerZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
});
