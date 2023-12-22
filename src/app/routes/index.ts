import express from "express";
import {AuthRoutes} from "../modules/auth/auth.route";
import {UserRoutes} from "../modules/user/user.route";
import {CategoryRoutes} from "../modules/category/category.routes";
import {QuestionRoutes} from "../modules/question/question.routes";
import {AnswerRoutes} from "../modules/correct-answers/correctAnswer.routes";
import {OptionRoutes} from "../modules/options/option.routes";
import {QuizRoutes} from "../modules/quiz/quiz.routes";
import {QuizSessionRoutes} from "../modules/quizSession/quizSession.routes";

const router = express.Router();
//
const moduleRoutes = [
  {path: "/auth", route: AuthRoutes},
  {path: "/users", route: UserRoutes},
  {path: "/categories", route: CategoryRoutes},
  {path: "/questions", route: QuestionRoutes},
  {path: "/options", route: OptionRoutes},
  {path: "/answers", route: AnswerRoutes},
  {path: "/quizzes", route: QuizRoutes},
  {path: "/sessions", route: QuizSessionRoutes},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
