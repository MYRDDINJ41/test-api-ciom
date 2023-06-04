import express from "express";
import solutionsRoutes from "./routes/Solutions.routes.js";
import categoriesRoutes from "./routes/Categories.routes.js";
import storagesRoutes from "./routes/Storage.routes.js";
import cors from "cors";
import path from 'path';

const app = express();


app
  .use(cors())
  .use(express.json())
  // .use(express.static(path.join('resources')))
  .use("/resources", express.static('/resources'))
  .use("/api", solutionsRoutes)
  .use("/api", categoriesRoutes)
  .use("/api", storagesRoutes)

  .use((req, res, next) => {
     res.status(404).json({ message: "Enpoint Not found" });
  });

export default app;
