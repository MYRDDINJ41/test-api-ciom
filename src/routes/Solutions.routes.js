import { Router } from "express";
import { getSolutions, createSolution, deleteSolution, updateSolution, getSolutionId } from "../controller/Solutions.controller.js";


const router = Router();

router
  .get("/solutions", getSolutions)
  .get("/solution/:id", getSolutionId)
  .post("/create-solutions", createSolution)
  .delete("/delete-solution/:id", deleteSolution)
  .patch("/update-solution/:id", updateSolution);

export default router;
