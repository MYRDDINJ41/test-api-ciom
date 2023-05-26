import { Router } from "express";
import { getSolutions, getStorageCategories, createSolution, deleteSolution, updateSolution } from "../controller/Solutions.controller.js";


const router = Router();

router
  .get("/solutions", getSolutions)
  .post("/solutions", createSolution)
  .delete("/delete-solution/:id", deleteSolution)
  .patch("/update-solution/:id", updateSolution)

  .get("/storage-categories", getStorageCategories)
  //.post("/storage-categories", createStorageCategory)
  //.delete("/delete-storage-category/:id", deleteStorageCategory)
  //.patch("/update-storage-category/:id", updateStorageCategory)

export default router;
