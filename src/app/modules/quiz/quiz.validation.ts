import {z} from "zod";

export const createQuizZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    title: z.string().nonempty({
      message: "title is required",
    }),
    categoryId: z.string().nonempty({
      message: "categoryId is required",
    }),
  }),
});
export const updateQuizZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    title: z.string().optional(),
    categoryId: z.string().optional(),
  }),
});

export const deleteQuizZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
});
