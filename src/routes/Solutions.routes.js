import { Router } from "express";
import { getSolutions, createSolution, deleteSolution, updateSolution, getSolutionId, uploadImage } from "../controller/Solutions.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "resources/images")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage});
const router = Router();

router
  
  .get("/solutions", getSolutions)
  .get("/solution/:id", getSolutionId)

  .post("/create-solutions", createSolution)
  .post("/upload-img/:id", upload.single("imagen"), uploadImage)

  .delete("/delete-solution/:id", deleteSolution)
  .patch("/update-solution/:id", updateSolution);

export default router;
