import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database Connected to :",mongoose.connection.host);
    } catch (error) {
        console.error("Connection Failure", error);
        process.exit(1);
    }
};

export default connectDB;

//here we are connecting to the database using mongoose and dotenv