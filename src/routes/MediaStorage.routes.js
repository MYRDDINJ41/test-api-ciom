import { Router } from "express";
import multer from "multer";
import { uploadImage, getAllImg,deletedImg } from "../controller/ImgStorage.constroller.js"
import { uploadVid, getAllVid, deletedVid } from "../controller/vidStorage.controller.js"


const router = Router();

const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });

router
    .get("/imgs", getAllImg)
    .post("/upload-img", upload.single("img"), uploadImage)
    .delete("/delete-img", deletedImg)

    .get('/vids', getAllVid)
    .post('/upload-vids', upload.single('vid'), uploadVid)
    .delete('/delete-vid', deletedVid)
    


export default router