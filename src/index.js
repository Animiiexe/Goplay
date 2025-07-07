import dotenv from 'dotenv';

import connectToDatabase from "./db/index.js";

dotenv.config({
  path: './.env' // optional if your file is named .env and in root
});
connectToDatabase()

// Connect to MongoDB using the URI and database name from environment variables
// (async()=>{
//     try{
// mongoose.connect('${process.env.MONGO_URI}/${process.env.DB_NAME}', )
//     }catch(err){
//         console.error("Error connecting to MongoDB:", err);
//     }
// })()

