import { z } from "zod";

export const createOrUpdateCategoryZodSchema = z.object({
  headers: z.object({
    authorization: z.string().min(1, {
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    title: z.string().min(1, {
      message: "Title is required",
    }),
  }),
});

export const deleteCategoryZodSchema = z.object({
  headers: z.object({
    authorization: z.string().min(1, {
      message: "Authorization is required",
    }),
  }),
});
