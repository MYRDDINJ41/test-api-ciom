//-------- Imports--------------------------------
import express from "express";
import cors from "cors";
//---------- Routes by configuration section --------------------------------
import solutionsRoutes from "./routes/Solutions.routes.js";
import categoriesRoutes from "./routes/Categories.routes.js";
import storagesRoutes from "./routes/Storage.routes.js";
import mediaStorageRoutes from "./routes/MediaStorage.routes.js";

const app = express();

app
  .use(cors())
  .use(express.json())
  //.use(express.static(path.join('resources')))
  //.use("/resources", express.static("/resources"))

  // Here we use all endpoints for use the controllers
  .use("/api", solutionsRoutes)
  .use("/api", categoriesRoutes)
  .use("/api", storagesRoutes)
  .use("/api", mediaStorageRoutes)

  // This funtions help us to know when there are no Endpoint found in the routes
  .use((req, res, next) => {
    res.status(404).json({ message: "Enpoint Not found" });
  });

export default app;
