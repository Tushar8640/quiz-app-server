"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersZodSchema = exports.createOrderZodSchema = void 0;
const zod_1 = require("zod");
exports.createOrderZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
    body: zod_1.z
        .object({
        orderedBooks: zod_1.z.array(zod_1.z.object({
            bookId: zod_1.z.string(),
            quantity: zod_1.z.number(),
        })),
    })
        .strict(),
});
exports.getOrdersZodSchema = zod_1.z.object({
    headers: zod_1.z.object({
        authorization: zod_1.z.string().nonempty({
            message: "Authorization is required",
        }),
    }),
});
