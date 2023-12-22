import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";

import {validateRequest} from "../../middlewares/validateRequest";
import {createQuestion, deleteQuestion, getAllQuestions, getQuestionByCategory, getSingleQuestion, updateQuestion} from "./question.controller";
import {createQuestionZodSchema, deleteQuestionZodSchema, updateQuestionZodSchema} from "./question.validation";

const router = Router();

router.get("/", getAllQuestions);

router.post("/", validateRequest(createQuestionZodSchema), auth(ENUM_USER_ROLE.ADMIN), createQuestion);

router.route("/:id").get(getSingleQuestion).patch(validateRequest(updateQuestionZodSchema), auth(ENUM_USER_ROLE.ADMIN), updateQuestion).delete(validateRequest(deleteQuestionZodSchema), auth(ENUM_USER_ROLE.ADMIN), deleteQuestion);

router.get("/category/:categoryId", getQuestionByCategory);

export const QuestionRoutes = router;
