import { Router } from "express";
import {
  getSolutions,
  createSolution,
  deleteSolution,
  updateSolution,
  getSolutionId,
  uploadImage, 
  getAllImg
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
  .get("/getImgs", getAllImg)

  .post("/create-solutions", createSolution)

  //.patch("/upload-img/:id", upload.single("imagen"), uploadImage)

  .post("/upload-img", upload.single("imagen"), uploadImage)

  .delete("/delete-solution/:id", deleteSolution)
  .patch("/update-solution/:id", updateSolution);

export default router;
