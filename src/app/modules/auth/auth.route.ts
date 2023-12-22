import express from "express";
import {createUser, loginUser, refreshToken} from "./auth.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createUserZodSchema, loginZodSchema, refreshTokenZodSchema} from "./auth.validation";
const router = express.Router();
//
router.post("/signup", validateRequest(createUserZodSchema), createUser);
router.post("/signin", validateRequest(loginZodSchema), loginUser);
router.post("/refresh-token", validateRequest(refreshTokenZodSchema), refreshToken);
//
export const AuthRoutes = router;
