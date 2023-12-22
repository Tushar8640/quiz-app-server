"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const category_validation_1 = require("./category.validation");
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.post("/create-category", (0, validateRequest_1.validateRequest)(category_validation_1.createOrUpdateCategoryZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.createCategory);
router.get("/", category_controller_1.getAllCategories);
router.route("/:id").get(category_controller_1.getSingleCategory).patch((0, validateRequest_1.validateRequest)(category_validation_1.createOrUpdateCategoryZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.updateCategory).delete((0, validateRequest_1.validateRequest)(category_validation_1.deleteCategoryZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.deleteCategory);
exports.CategoryRoutes = router;
