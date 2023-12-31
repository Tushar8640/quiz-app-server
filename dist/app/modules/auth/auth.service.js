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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenService = exports.loginUserService = exports.createUserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const index_1 = __importDefault(require("../../../config/index"));
const ApiError_1 = require("../../../handleErrors/ApiError");
const jwtHelpers_1 = require("../../../shared/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const auth_utils_1 = require("./auth.utils");
const bcrypt_1 = __importDefault(require("bcrypt"));
//----------create user or sign up
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = user, userData = __rest(user, ["password", "email"]);
    const isUserExist = yield prisma_1.default.user.findUnique({
        where: { email },
    });
    if (isUserExist) {
        throw new ApiError_1.ApiError(http_status_1.default.BAD_REQUEST, "User already exists");
    }
    const hashedPassword = yield (0, auth_utils_1.hashingPassword)(password);
    const newUser = yield prisma_1.default.user.create({
        data: Object.assign({ password: hashedPassword, email }, userData),
    });
    return newUser;
});
exports.createUserService = createUserService;
//--------user login
const loginUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isUserExist = yield prisma_1.default.user.findUnique({
        where: { email },
    });
    if (!isUserExist) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, "User doesn't found");
    }
    if (isUserExist.password && !(yield bcrypt_1.default.compare(password, isUserExist.password))) {
        throw new ApiError_1.ApiError(http_status_1.default.UNAUTHORIZED, "Password is incorrect");
    }
    //create accesstoken & refresh token
    const { id: userId, role } = isUserExist;
    const accessToken = (0, jwtHelpers_1.createToken)({ userId, role }, index_1.default.jwt.secret, {
        expiresIn: index_1.default.jwt.expires_in,
    });
    const refreshToken = (0, jwtHelpers_1.createToken)({ userId, role }, index_1.default.jwt.refresh_secret, { expiresIn: index_1.default.jwt.refresh_expires_in });
    return {
        accessToken,
        refreshToken,
    };
});
exports.loginUserService = loginUserService;
///
const refreshTokenService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let verifiedToken = null;
    try {
        verifiedToken = (0, jwtHelpers_1.verifyToken)(token, index_1.default.jwt.refresh_secret);
    }
    catch (error) {
        throw new ApiError_1.ApiError(http_status_1.default.FORBIDDEN, "Invalid refresh token");
    }
    const { userId, role } = verifiedToken;
    // check if user exists
    const isUserExist = yield prisma_1.default.user.findUnique({
        where: { id: userId },
    });
    if (!isUserExist) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, "User does not exist");
    }
    //generate new token
    const newAccessToken = (0, jwtHelpers_1.createToken)({
        id: isUserExist.id,
        role: isUserExist.role,
    }, index_1.default.jwt.refresh_secret, { expiresIn: index_1.default.jwt.refresh_expires_in });
    return {
        accessToken: newAccessToken,
    };
});
exports.refreshTokenService = refreshTokenService;
