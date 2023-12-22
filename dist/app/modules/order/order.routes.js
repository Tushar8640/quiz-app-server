"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const order_validation_1 = require("./order.validation");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
router.get("/", (0, validateRequest_1.validateRequest)(order_validation_1.getOrdersZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.getAllORders);
router.post("/create-order", (0, validateRequest_1.validateRequest)(order_validation_1.createOrderZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.createOrder);
router.get("/:id", (0, validateRequest_1.validateRequest)(order_validation_1.getOrdersZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.getSingleOrder);
exports.OrderRoutes = router;
