import "dotenv/config";
import config from "config";
import App from "./app/App";
import validateEnv from "./app/validateEnv";

import TownController from '../controllers/town.controller';
import StoreController from '../controllers/store.controller';
import CheapStoreController from '../controllers/cheapStore.controller';
import MainPageController from '../controllers/mainPage.controller';
import AdminController from '../controllers/admin.controller';

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
  new StoreController(),
  new CheapStoreController(),
  new MainPageController(),
  new AdminController(),
]);

// Express app listen
const server = app.listen();

module.exports = server;
