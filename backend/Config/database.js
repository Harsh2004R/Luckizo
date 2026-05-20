import mongoose from "mongoose";


const URL = process.env.MONGO_URI;
const databaseConnection = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Mongodb is connected ::::::::::")
    } catch (error) {
        console.log("Error in mongodb connection ------>", error);
        process.exit(1);
    }
}



export default databaseConnection;






