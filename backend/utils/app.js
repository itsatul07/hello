import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"



const app=express();





app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials :true,
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
//app.use(checkForCookie("token"));

//router import
import userRouter from "../router/userRouter.js"

//router use
app.use("/api/user",userRouter);

export default app