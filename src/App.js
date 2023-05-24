import express from 'express';
import storageRoutes from "./routes/Storage.routes.js"


const app = express();

app
    .use(express.json())
    .use("/api", storageRoutes)
    .use((req, res, next) => {
        res.status(404).json({ message: "Enpoint Not found" });
    })

export default app;