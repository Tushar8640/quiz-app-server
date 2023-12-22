import {Router} from "express";
import {ENUM_USER_ROLE} from "../../../enums/user";
import auth from "../../middlewares/auth";
import {validateRequest} from "../../middlewares/validateRequest";
import {createOrUpdateCategoryZodSchema, deleteCategoryZodSchema} from "./category.validation";
import {createCategory, deleteCategory, getAllCategories, getSingleCategory, updateCategory} from "./category.controller";

const router = Router();

router.post("/", validateRequest(createOrUpdateCategoryZodSchema), auth(ENUM_USER_ROLE.ADMIN), createCategory);

router.get("/", getAllCategories);

router.route("/:id").get(getSingleCategory).patch(validateRequest(createOrUpdateCategoryZodSchema), auth(ENUM_USER_ROLE.ADMIN), updateCategory).delete(validateRequest(deleteCategoryZodSchema), auth(ENUM_USER_ROLE.ADMIN), deleteCategory);

export const CategoryRoutes = router;
