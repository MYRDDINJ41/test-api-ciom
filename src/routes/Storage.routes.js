import { Router } from "express";
import {
  getSolutions,
  getCategories,
  getStorageCategories,
  createSolution,
  deleteSolution,
  updateSolution
} from "../controller/Storage.controller.js";

const router = Router();

router
  .get("/solutions", getSolutions)
  .get("/categories", getCategories)
  .get("/storage-categories", getStorageCategories)

  .post("/solutions", createSolution)

  .delete("/delete-solution/:id", deleteSolution)
  
  .patch("/update-solution/:id", updateSolution)

export default router;
