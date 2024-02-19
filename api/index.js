import express from 'express';
<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();

mongoose.connect(process.env.MONGO).then(res=>{
    console.log("connected to the MongoDB")
}).catch(err=>{
    console.log(err)
})
=======
>>>>>>> 226582063a87a893e0f51795f258c274734e44cd

const app = express();

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);