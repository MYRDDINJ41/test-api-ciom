import { Router } from "express";
import { getCategories, getCategoryId, createCategory, deleteCategory, updateCategory, getCategoriesByIdSolution } from "../controller/Categories.controller.js";

const router = Router();

router
    .get("/categories", getCategories)
    .get("/category/:id", getCategoryId)
    //id de la solution
    .get("/categoriesBySolution/:id", getCategoriesByIdSolution)
    .post("/categories/:id", createCategory)
    .delete("/delete-category/:id", deleteCategory)
    .patch("/update-category/:id", updateCategory)

  export default router;