"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZodSchema = exports.getOrDeleteUserZodSchema = exports.getAllUsersZodSchema = void 0;
const zod_1 = require("zod");
exports.getAllUsersZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
});
exports.getOrDeleteUserZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});
exports.updateUserZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
    body: zod_1.z
        .object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        password: zod_1.z.string().optional(),
        role: zod_1.z.enum(["admin", "customer"]).default("customer").optional(),
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        profileImg: zod_1.z.string().optional(),
    })
        .strict(),
});
