import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import PlayerModel from "../Models/player.model.js"




// login Player controller...
export const createPlayerController = async (req, res) => {
    const { phone, email, password } = req.body;
    try {

        if (!phone || !email || !password) {
            return res.status(401).json({ message: "phone|email|password is missing ..." });
        }

        const existingPlayer = await PlayerModel.findOne({ $or: [{ email }, { phone }] });
        if (existingPlayer) {
            return res.status(401).json({ message: "Player is already exist in database ..." });
        }

        const hash = await bcrypt.hash(password, 10);

        const player = new PlayerModel({
            phone,
            email,
            password: hash,

        })
        await player.save();
        return res.status(200).json({
            message: "New Player is created ...",
            id: player._id,
        })

    } catch (error) {
        return res.status(400).json({
            message: "Signup api error ....", error: error.message
        })
    }

}



// signup Player controller ...
export const verifyPlayerController = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: "phone|email|password is missing ..." });
        }

        const player = await PlayerModel.findOne({ email });
        if (!player) {
            return res.status(401).json({
                message: "Player not found in database ..."
            })

        }

        const checkPassword = await bcrypt.compare(password, player.password);
        if (!checkPassword) {
            return res.status(401).json({
                message: "Password is incorrect ..."
            })
        }

        const accessToken = jwt.sign({
            playerID: player._id,
            role: player.role,
            email: player.email,

        },
            process.env.ACCESS_SECRET,
            {
                expiresIn: "30m"
            });


        const refreshToken = jwt.sign({
            playerID: player._id,
            role: player.role,
            email: player.email,

        },
            process.env.REFRESH_SECRET,
            {
                expiresIn: "14d"
            });

        player.refreshToken = refreshToken;
        await player.save();

        return res.status(200).json({
            message: "Login Successful ...",
            token: accessToken,
            refreshToken
        })

    } catch (error) {
        return res.status(400).json({
            message: "Login api error ....", error: error.message
        })

    }

}




// get all single Player list ... 
export const getAllPlayerController = async (req, res) => {

    try {
        const allPlayers = await PlayerModel.find();
        return res.status(200).json({
            message: "All Players list here...",
            players: allPlayers
        })
    } catch (error) {
        return res.status(400).json({
            message: "Error in get all players api ..."
        })
    }

}


// get single Player info ...
export const getPlayerInfoController = async (req, res) => {


    const { id } = req.params;
    try {
        const player = await PlayerModel.findById(id);
        return res.status(200).json({ message: "player details fetched...", player })
    } catch (error) {
        return res.status(400).json({
            message: "Error in comming from get user info api...", error: error.message
        })
    }
}



// delet Player controller...
export const deleteSinglePlayerController = async (req, res) => {
    const { id } = req.params;
    try {
        await PlayerModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Player is deleted ....."
        })
    } catch (error) {
        return res.status(400).json({
            message: "Error is comming from delete player api...",
            error: error.message
        })
    }
}



// edit Player details or profile...
export const editPlayerController = async (req, res) => {

    const { id } = req.params;
    try {

        const updatedPlayer = await PlayerModel.findByIdAndUpdate(id, req.body, { new: true });

        console.log({ updatedPlayer });
        return res.status(200).json({
            message: "Player Profile is updated successful ...", player: updatedPlayer
        })

    } catch (error) {
        return res.status(400).json({
            message: "error is comming from edit player info api...",
            error: error.message
        })
    }

}








