import {z} from "zod";

export const createOrUpdateCategoryZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    title: z.string().nonempty({
      message: "Title is required",
    }),
  }),
});

export const deleteCategoryZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
});


