import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";
import {validateRequest} from "../../middlewares/validateRequest";
import {createAnswer, deleteAnswer, getAnswerByQuestion, updateAnswer} from "./correctAnswer.controller";
import {createAnswerZodSchema, deleteAnswerZodSchema, updateAnswerZodSchema} from "./correctAnswer.validation";

const router = Router();

router.post("/", validateRequest(createAnswerZodSchema), auth(ENUM_USER_ROLE.ADMIN), createAnswer);

router.get("/question/:id", getAnswerByQuestion);

router.route("/:id").patch(validateRequest(updateAnswerZodSchema), auth(ENUM_USER_ROLE.ADMIN), updateAnswer).delete(validateRequest(deleteAnswerZodSchema), auth(ENUM_USER_ROLE.ADMIN), deleteAnswer);

export const AnswerRoutes = router;
