import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";
import {validateRequest} from "../../middlewares/validateRequest";
import {createQuiz, deleteQuiz, getAllQuiz, getQuizByCategory, getSingleQuiz, updateQuiz} from "./quiz.controller";
import {createQuestionZodSchema} from "../question/question.validation";
import {deleteQuizZodSchema, updateQuizZodSchema} from "./quiz.validation";

const router = Router();

router.post("/", validateRequest(createQuestionZodSchema), auth(ENUM_USER_ROLE.ADMIN), createQuiz);

router.get("/category/:id", getQuizByCategory);
router.get("/", getAllQuiz);

router.route("/:id").get(getSingleQuiz).patch(validateRequest(updateQuizZodSchema), auth(ENUM_USER_ROLE.ADMIN), updateQuiz).delete(validateRequest(deleteQuizZodSchema), auth(ENUM_USER_ROLE.ADMIN), deleteQuiz);

export const QuizRoutes = router;
