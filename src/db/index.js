import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectToDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`,);
        console.log(`\n MongoDb connected!! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("some error",error)
        process.exit(1);
    }
}


export default connectToDatabase