import {z} from "zod";

export const getAllUsersZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
});

export const getOrDeleteUserZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export const updateUserZodSchema = z.object({
  headers: z.object({
    authorization: z.string().nonempty({
      message: "Authorization is required",
    }),
  }),
  params: z.object({
    id: z.string(),
  }),
  body: z
    .object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().optional(),
      role: z.enum(["admin", "performer"]).default("performer").optional(),
      contactNo: z.string().optional(),
      address: z.string().optional(),
      profileImg: z.string().optional(),
    })
    .strict(),
});
