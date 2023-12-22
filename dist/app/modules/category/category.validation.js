"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryZodSchema = exports.createOrUpdateCategoryZodSchema = void 0;
const zod_1 = require("zod");
exports.createOrUpdateCategoryZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
    body: zod_1.z.object({
        title: zod_1.z.string().nonempty({
            message: "Title is required",
        }),
    }),
});
exports.deleteCategoryZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
});
