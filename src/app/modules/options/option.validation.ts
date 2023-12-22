import {z} from "zod";

export const createOptionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    option: z.string().nonempty({
      message: "option is required",
    }),
    questionId: z.string().nonempty({
      message: "questionId is required",
    }),
  }),
});
export const updateOptionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  body: z.object({
    option: z.string().optional(),
    questionId: z.string().optional(),
  }),
});

export const deleteOptionZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
});
