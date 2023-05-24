import express from 'express';
import storageRoutes from "./routes/Storage.routes.js"
import cors from 'cors';


const app = express();

app
    .use(cors())
    .use(express.json())
    .use("/api", storageRoutes)
    .use((req, res, next) => {
        res.status(404).json({ message: "Enpoint Not found" });
    })

export default app;