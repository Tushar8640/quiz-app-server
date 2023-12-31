import {z} from "zod";

export const createQuestionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      question_text: z.string().nonempty({
        message: "question_text is required",
      }),
      correct_answers: z.array(z.string()).optional(),
      options: z.array(z.string()).optional(),
      marks: z.number({required_error: "marks is required"}).optional(),
      quizId: z.string().nonempty({
        message: "quizId Id is required",
      }),
      multiple: z.boolean().default(true),
    })
    .strict(),
});

export const updateQuestionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z
    .object({
      question_text: z.string().optional(),
      correct_answers: z.array(z.string()).optional(),
      options: z.array(z.string()).optional(),
      marks: z.number().optional(),
      multiple: z.boolean().optional(),
      categoryId: z.string().optional(),
      quizId: z.string().optional(),
    })
    .strict(),
});

export const deleteQuestionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
});
