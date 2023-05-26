import express from 'express';
import storagesRoutes from "./routes/Solutions.routes.js"
import categoriesRoutes from "./routes/Categories.routes.js";
import cors from 'cors';

const app = express();

app
    .use(cors())
    .use(express.json())
    
    .use("/api", storagesRoutes)
    .use("/api", categoriesRoutes)

    .use((req, res, next) => {
        res.status(404).json({ message: "Enpoint Not found" });
    })

export default app;