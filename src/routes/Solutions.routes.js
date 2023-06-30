/*Imports---------------------------------------------------------------
Import Router for route my endpoints to App.js
Import ALL crontrollers here from folder controller.
Import multer middleware here to file upload and download like pictures and videos in this case.
*/
import { Router } from "express";
import {getSolutions, createSolution, deleteSolution, updateSolution, getSolutionId} from "../controller/Solutions.controller.js";
import multer from "multer";

//Invoke the function Router to work with routes
const router = Router();

// memoStorage is Object to stores memory, so is a memory out our local disk; some_file ---> server
// upload is a instance of Multer and the argument is memoStorage is a configuration for use the mememory storage
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });

//  ----- Configurations for use multer storage y our local disk --------------------------------
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "storage/images")
// },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   }
// });
// const upload = multer({storage: storage})

// That endpoints work next to /api; ex --> /api/solutions 
router
  .get("/solutions", getSolutions)
  .get("/solution/:id", getSolutionId)
  .post("/create-solution", upload.single("img_s"), createSolution)
  .delete("/delete-solution/:id", deleteSolution)
  .patch("/update-solution/:id", updateSolution);

export default router;