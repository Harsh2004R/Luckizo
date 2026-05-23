import express from "express";
import {
  getAllPlayerController,
  getPlayerInfoController,
  deleteSinglePlayerController,
  editPlayerController,
  verifyPlayerController,
  createPlayerController,
} from "../Controller/player.controller.js";
import protectMiddleware from "../Middlewares/protect.middleware.js";
import roleMiddleware from "../Middlewares/role.middleware.js";

const PlayerRouter = express.Router();

// Get Single Player info Route ...
PlayerRouter.get(
  "/player/:id/info",
  protectMiddleware,
  roleMiddleware("admin"),
  getPlayerInfoController,
);

// Get All Player List | Data | info Route ...
PlayerRouter.get(
  "/player/get/all",
  protectMiddleware,
  roleMiddleware("admin"),
  getAllPlayerController,
);

// Player Signup Route ...
PlayerRouter.post("/player/signup", createPlayerController);

// Player Login Route ...
PlayerRouter.post("/player/login", verifyPlayerController);

// Player Delete Route ...
PlayerRouter.delete(
  "/player/:id",
  protectMiddleware,
  roleMiddleware("admin"),
  deleteSinglePlayerController,
);

// Player Profile Edit Route ...
PlayerRouter.patch(
  "/player/:id",
  protectMiddleware,
  roleMiddleware("player"),
  editPlayerController,
);

export default PlayerRouter;
