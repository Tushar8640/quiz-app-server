"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenZodSchema = exports.loginZodSchema = exports.createUserZodSchema = void 0;
const zod_1 = require("zod");
exports.createUserZodSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        email: zod_1.z.string().email({
            message: "Email is required",
        }),
        password: zod_1.z.string({ required_error: "password is required" }),
        role: zod_1.z.enum(["admin", "customer"]).default("customer"),
        contactNo: zod_1.z.string({
            required_error: "Contact number is required",
        }),
        address: zod_1.z.string({
            required_error: "Address is required",
        }),
        profileImg: zod_1.z.string().optional(),
    })
        .strict(),
});
exports.loginZodSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        email: zod_1.z.string({ required_error: "Phone number is required" }),
        password: zod_1.z.string({ required_error: "Password is required" }),
    })
        .strict(),
});
exports.refreshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({ required_error: "Refresh token is required" }),
    }),
});
