import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
    phone: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    refreshToken: String,
    profile: { type: String, default: "https://res.cloudinary.com/djbe55v48/image/upload/v1779195557/Fortune-of-wheel/avatar1_fqgqki.png" },

}, {
    timestamps: true
});

const PlayerModel = mongoose.model("player", playerSchema);
export default PlayerModel;