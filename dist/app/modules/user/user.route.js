"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.get("/", (0, validateRequest_1.validateRequest)(user_validation_1.getAllUsersZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.getAllUsers);
router.get("/profile", (0, validateRequest_1.validateRequest)(user_validation_1.getAllUsersZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), user_controller_1.getUserProfile);
router.route("/:id").get((0, validateRequest_1.validateRequest)(user_validation_1.getOrDeleteUserZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), user_controller_1.getUserById).patch((0, validateRequest_1.validateRequest)(user_validation_1.updateUserZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.updateUser).delete((0, validateRequest_1.validateRequest)(user_validation_1.getOrDeleteUserZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.deleteUser);
router.patch("/make-admin/:id", (0, validateRequest_1.validateRequest)(user_validation_1.updateUserZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.makeAdmin);
exports.UserRoutes = router;
