import "dotenv/config";
import config from "config";
import App from "./app/App";
import validateEnv from "./app/validateEnv";

import TownController from '../controllers/town.controller';

// Check if private key exist
if (!config.get("jwtPrivateKey")) {
  console.error("Fatal Error: jwtPrivateKey is not defined.");
  process.exit(1);
}

// Validatin enivronmental variables
validateEnv();

// Starting app
const app = new App([
  // Adding all controllers
  new TownController(),
]);

// Express app listen
const server = app.listen();

module.exports = server;
