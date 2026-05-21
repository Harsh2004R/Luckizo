import express from "express";
import {
    getAllPlayerController,
    getPlayerInfoController,
    deleteSinglePlayerController,
    editPlayerController,
    verifyPlayerController,
    createPlayerController
}
    from "../Controller/player.controller.js"


const PlayerRouter = express.Router();
PlayerRouter.get("/player/:id/info", getPlayerInfoController);
PlayerRouter.get("/player/get/all", getAllPlayerController);
PlayerRouter.post("/player/signup", createPlayerController);
PlayerRouter.post("/player/login", verifyPlayerController);
PlayerRouter.delete("/player/:id", deleteSinglePlayerController);
PlayerRouter.patch("/player/:id", editPlayerController);


export default PlayerRouter;


