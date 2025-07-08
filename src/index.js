import dotenv from 'dotenv';
import app from './app.js';
import connectToDatabase from "./db/index.js";

dotenv.config({
  path: './.env' // optional if your file is named .env and in root
});

connectToDatabase().then(()=>{
  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  app.on('error', (err) => {
    console.error('Server error:', err);
  });
}).catch((err)=>{
  console.error("Error connecting to the database:", err);
  process.exit(1);
})

// Connect to MongoDB using the URI and database name from environment variables
// (async()=>{
//     try{
// mongoose.connect('${process.env.MONGO_URI}/${process.env.DB_NAME}', )
//     }catch(err){
//         console.error("Error connecting to MongoDB:", err);
//     }
// })()
