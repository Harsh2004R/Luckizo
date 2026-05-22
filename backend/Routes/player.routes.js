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


// get single player info
PlayerRouter.get(
  "/player/:id/info",
  protectMiddleware,
  roleMiddleware("admin"),
  getPlayerInfoController,
);

PlayerRouter.get(
  "/player/get/all",
  protectMiddleware,
  roleMiddleware("admin"),
  getAllPlayerController,
);

PlayerRouter.post("/player/signup", createPlayerController);
PlayerRouter.post("/player/login", verifyPlayerController);

PlayerRouter.delete(
  "/player/:id",
  protectMiddleware,
  roleMiddleware("admin"),
  deleteSinglePlayerController,
);
PlayerRouter.patch("/player/:id", editPlayerController);

export default PlayerRouter;
