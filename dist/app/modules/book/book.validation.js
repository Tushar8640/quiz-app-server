"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookZodSchema = exports.updateCategoryZodSchema = exports.createBookZodSchema = void 0;
const zod_1 = require("zod");
exports.createBookZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().nonempty({
            message: "Title is required",
        }),
        author: zod_1.z.string().nonempty({
            message: "Author is required",
        }),
        price: zod_1.z.number({ required_error: "Price is required" }),
        publicationDate: zod_1.z.string({
            required_error: "Publication date is required",
        }),
        categoryId: zod_1.z.string().nonempty({
            message: "Category Id is required",
        }),
        genre: zod_1.z.string().nonempty({
            message: "genre is required",
        }),
    })
        .strict(),
});
exports.updateCategoryZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        publicationDate: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        categoryId: zod_1.z.string().nonempty().optional(),
    })
        .strict(),
});
exports.deleteBookZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
});
