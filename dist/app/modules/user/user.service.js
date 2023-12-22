"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAdminService = exports.deleteUserService = exports.updateUserService = exports.getUserProfileService = exports.getUserByIdService = exports.getAllUserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = require("../../../handleErrors/ApiError");
//get all user
const getAllUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.default.user.findMany();
    return users;
});
exports.getAllUserService = getAllUserService;
//get user by id
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: { id },
    });
    if (!user) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, "User not found");
    }
    return user;
});
exports.getUserByIdService = getUserByIdService;
//get user profile
const getUserProfileService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user.userId) {
        throw new ApiError_1.ApiError(http_status_1.default.FORBIDDEN, "Access denied");
    }
    const specificUser = yield prisma_1.default.user.findUnique({
        where: {
            id: user.userId,
        },
    });
    if (!specificUser) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, "User not found!");
    }
    return specificUser;
});
exports.getUserProfileService = getUserProfileService;
//update user
const updateUserService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
    });
    if (!user) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, "User not found");
    }
    const updatedUser = prisma_1.default.user.update({
        where: {
            id,
        },
        data: payload,
    });
    return updatedUser;
});
exports.updateUserService = updateUserService;
//delete user
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
    });
    if (!user) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, "User not found");
    }
    yield prisma_1.default.user.delete({
        where: {
            id,
        },
    });
    return user;
});
exports.deleteUserService = deleteUserService;
//make admin
const makeAdminService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
    });
    if (!user) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, "User not found");
    }
    const updatedUser = yield prisma_1.default.user.update({
        where: {
            id,
        },
        data: {
            role: "admin",
        },
    });
    return updatedUser;
});
exports.makeAdminService = makeAdminService;
