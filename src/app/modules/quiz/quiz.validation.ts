import {z} from "zod";

export const createQuizZodSchema = z.object({
  headers: z.object({
    authorization: z.string().min(1,{
      message: "Authorization is required",
    }),
  }),

  body: z.object({
    title: z.string().min(1,{
      message: "title is required",
    }),
    categoryId: z.string().min(1,{
      message: "categoryId is required",
    }),
  }),
});

export const updateQuizZodSchema = z.object({
  headers: z.object({
    authorization: z.string().min(1,{
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
