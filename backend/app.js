import express from "express";
import cors from "cors";
import { } from "dotenv/config";
import databaseConnection from "./Config/database.js";
import PlayerRouter from "./Routes/player.routes.js";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));



// testing api's ...
const ping = 51;
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "server is working fine ", ping
    })
})



// custom api's ...
app.use("/api/v1", PlayerRouter);




// mongodb connection function...
databaseConnection();
app.listen(process.env.PORT, (req, res) => {

    console.log(`http://localhost:${process.env.PORT}`)

})





