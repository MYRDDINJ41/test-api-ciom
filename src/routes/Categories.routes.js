import { Router } from "express";
import { getCategories, createCategory } from "../controller/Categories.controller.js";

const router = Router();

router
    .get("/categories", getCategories)
    .post("/categories/:id", createCategory)
  //.delete("/delete-category/:id", deleteCategory)
  //.patch("/update-category/:id", updateCategory)

  export default router;