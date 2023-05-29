import { Router } from "express";
import { getStorage, getStorageById, createStorage, deleteStorage, updateStorage} from "../controller/Storage.controller.js"

const router = Router();

router
    .get("/storages", getStorage)
    .get("/storage/:id", getStorageById)
    .post("/create-storage", createStorage)
    .delete("/delete-storage/:id", deleteStorage)
    .patch("/update-storage-category/:id", updateStorage)

export default router; 