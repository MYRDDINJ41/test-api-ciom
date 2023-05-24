import { Router } from "express";
import {
  getSolutions,
  getCategories,
  getSubCategories,
  getVidSubCategories,
  createSolution,
  deleteSolution,
  updateSolution
} from "../controller/Storage.controller.js";

const router = Router();

router
  .get("/solutions", getSolutions)
  .get("/categories", getCategories)
  .get("/sub-categories", getSubCategories)
  .get("/vidSubCategories", getVidSubCategories)

  .post("/solutions", createSolution)

  .delete("/delete-solution/:id", deleteSolution)
  
  .patch("/update-solution/:id", updateSolution)

export default router;
