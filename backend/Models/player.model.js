import mongoose from "mongoose";

const withdrawalSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "success", "rejected"],
      default: "pending",
    },

    requestedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false },
);

const playerSchema = mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ["player", "admin"],
      default: "player",
      index: true,
    },
    rank: {
      type: Number,
      index: true,
      default: 1,
    },
    refreshToken: { type: String, select: false },
    wallet: { type: Number, default: 0 },
    withdrawal: [withdrawalSchema],
    profile: {
      type: String,
      default:
        "https://res.cloudinary.com/djbe55v48/image/upload/v1779195557/Fortune-of-wheel/avatar1_fqgqki.png",
    },
  },
  {
    timestamps: true,
  },
);

const PlayerModel = mongoose.model("player", playerSchema);
export default PlayerModel;
