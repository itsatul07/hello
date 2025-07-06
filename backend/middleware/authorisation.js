import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import {User} from "../models/user.models.js";

export const isAuthenticated = asyncHandler(async (req,res,next)=>{
    try {
        
        const token =  req.cookies?.accessToken ;
        
        if(!token){
           
            return res.status(401).json({
                success: false,
                message: "Unauthorized access - Not logged in"
            });
        }
        //console.log("token",token)
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        //console.log("decodedToken",decodedToken)
        const user = await User.findById(decodedToken?._id)
        .select("-password -refreshToken");
        //console.log("user",user);
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid access - User not found"
            });
        }
        //console.log("user",user)
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error in authorisation middleware"
        });
    }
})

