import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";
import {validateRequest} from "../../middlewares/validateRequest";
import {createOptionZodSchema, deleteOptionZodSchema, updateOptionZodSchema} from "./option.validation";
import {createOption, deleteOption, getOptionByQuestion, updateOption} from "./option.controller";

const router = Router();

router.post("/", validateRequest(createOptionZodSchema), auth(ENUM_USER_ROLE.ADMIN), createOption);

router.get("/question/:id", getOptionByQuestion);

router.route("/:id").patch(validateRequest(updateOptionZodSchema), auth(ENUM_USER_ROLE.ADMIN), updateOption).delete(validateRequest(deleteOptionZodSchema), auth(ENUM_USER_ROLE.ADMIN), deleteOption);

export const OptionRoutes = router;
