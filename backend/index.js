//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import app from "./utils/app.js";
import connectDB from "./db/database.js"


dotenv.config({
    path: './env'
})




const PORT = 8000;

connectDB()
.then(() => {
    app.on("error",(error) => {
        colsole.log("error:",error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is listening at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed ",err);
})












/*
app.get("/",(req,res)=>{
    res.send("Hello World from Express!");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
    */
