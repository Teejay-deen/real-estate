import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/user.route.js';
import dotenv from "dotenv"

dotenv.config();

mongoose.connect(process.env.MONGO).then(res=>{
    console.log("connected to the MongoDB")
}).catch(err=>{
    console.log(err)
})


const app = express();
app.use(express.json());

app.listen(3000, () =>
  console.log('Example app listening on port 3000'),
);

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)