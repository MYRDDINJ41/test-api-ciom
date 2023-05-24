import { PORT } from './model/Config.js';
import app from './App.js';

app.listen(PORT)
console.log("server listening on port " + PORT);