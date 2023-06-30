import { Router } from "express";
import { getUsers, deleteUser, updateUser, createUser } from "../controller/Users.controller.js"

const router = Router();

router
    .get('/users', getUsers)
    .delete("/deleteUser", deleteUser)
    .post("/createUser", createUser)
    .patch("/updateUser", updateUser)
export default router;