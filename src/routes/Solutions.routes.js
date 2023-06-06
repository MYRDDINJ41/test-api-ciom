import { Router } from "express";
import {
  getSolutions,
  createSolution,
  deleteSolution,
  updateSolution,
  getSolutionId,
  uploadImage
} from "../controller/Solutions.controller.js";
import multer from "multer";

const router = Router();
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "storage/images")
// },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   }
// });
// const upload = multer({storage: storage})

const memoSotorage = multer.memoryStorage();
const upload = multer({ memoSotorage });

router
  .get("/solutions", getSolutions)
  .get("/solution/:id", getSolutionId)

  .post("/create-solutions", createSolution)

  .patch("/upload-img/:id", upload.single("imagen"), uploadImage)

  .post("/upload-img", upload.single("imagen"), uploadImage2)

  .delete("/delete-solution/:id", deleteSolution)
  .patch("/update-solution/:id", updateSolution);

export default router;
