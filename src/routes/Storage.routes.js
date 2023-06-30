import { Router } from "express";
import { getStorage, getStorageById, createStorage, deleteStorage, updateStorage, getStorageByCategoryId} from "../controller/Storage.controller.js"
  
const router = Router();

router
    .get("/storages", getStorage)
    .get("/storage/:id", getStorageById)
    .get("/storagesByCategory/:id", getStorageByCategoryId)
    .post("/create-storage", createStorage)
    .delete("/delete-storage/:id", deleteStorage)
    .patch("/update-storage/:id", updateStorage)

export default router; 