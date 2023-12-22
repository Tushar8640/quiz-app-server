import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";
import {validateRequest} from "../../middlewares/validateRequest";
import {createQuizSessionZodSchema, deleteQuizSessionZodSchema, updateQuizSessionZodSchema} from "./quizSession.validation";
import {createQuizSession, deleteQuizSession, getQuizSessionByPerformer, getSingleQuizSession, updateQuizSession} from "./quizSession.controller";

const router = Router();

router.post("/", validateRequest(createQuizSessionZodSchema), auth(ENUM_USER_ROLE.ADMIN), createQuizSession);

router.get("/performer/:id", getQuizSessionByPerformer);
// router.get("/", getAllQuiz);

router.route("/:id").get(getSingleQuizSession).patch(validateRequest(updateQuizSessionZodSchema), auth(ENUM_USER_ROLE.ADMIN), updateQuizSession).delete(validateRequest(deleteQuizSessionZodSchema), auth(ENUM_USER_ROLE.ADMIN), deleteQuizSession);

export const QuizSessionRoutes = router;
