import {z} from "zod";

export const createUserZodSchema = z.object({
  body: z
    .object({
      name: z.string({required_error: "Name is required"}),
      email: z.string().email({
        message: "Email is required",
      }),
      password: z.string({required_error: "password is required"}),
      role: z.enum(["admin", "customer"]).default("customer"),
      contactNo: z.string({
        required_error: "Contact number is required",
      }),
      address: z.string({
        required_error: "Address is required",
      }),
      profileImg: z.string().optional(),
    })
    .strict(),
});
export const loginZodSchema = z.object({
  body: z
    .object({
      email: z.string({required_error: "Phone number is required"}),
      password: z.string({required_error: "Password is required"}),
    })
    .strict(),
});

export const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({required_error: "Refresh token is required"}),
  }),
});
