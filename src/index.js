// ----------------- Imports --------------------------------
// Import first is for the port that config.js is on model folder
// Import app is the main module for routes and that data goes through PORT
import { PORT } from './model/Config.js';
import app from './App.js';
app.listen(PORT)
console.log("server listening on port " + PORT);