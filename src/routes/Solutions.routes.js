import { Router } from "express";
import { getSolutions, createSolution, deleteSolution, updateSolution, getSolutionId, uploadImage } from "../controller/Solutions.controller.js";
import multer from "multer";

const upload = multer({dest: "storage/images"});
const router = Router();

router
  .get("/solutions", getSolutions)
  .get("/solution/:id", getSolutionId)

  .post("/create-solutions", createSolution)
  
  .patch("/upload-img/:id", upload.single("imagen"), uploadImage)

  .delete("/delete-solution/:id", deleteSolution)
  .patch("/update-solution/:id", updateSolution);


export default router;
