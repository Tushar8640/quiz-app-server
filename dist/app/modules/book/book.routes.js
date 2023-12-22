"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const book_validation_1 = require("./book.validation");
const router = (0, express_1.Router)();
router.get("/", book_controller_1.getAllBooks);
router.post("/create-book", (0, validateRequest_1.validateRequest)(book_validation_1.createBookZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.createBook);
router.route("/:id").get(book_controller_1.getSingleBook).patch((0, validateRequest_1.validateRequest)(book_validation_1.updateCategoryZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.updateBook).delete((0, validateRequest_1.validateRequest)(book_validation_1.deleteBookZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.deleteBook);
router.get("/:categoryId/category", book_controller_1.getBookByCategory);
exports.BookRoutes = router;
