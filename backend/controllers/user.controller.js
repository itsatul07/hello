import {User} from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
//import { generateAccessToken, generateRefreshToken } from "../models/user.models.js";


const generateAccessandRefreshTokens = async (userId) =>{
    //console.log("hi");
    try {
        const user = await User.findById(userId);
        //console.log("hello");
        //console.log(user);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        //console.log("token generated");
        user.refreshToken = refreshToken;
        //console.log(user);
        await user.save({ validateBeforeSave:false });
        
        return {accessToken,refreshToken};
    } catch (error) {
        throw new Error("Error generating access and refresh tokens");
    }
} 

const RegisterUser = asyncHandler(async (req, res) => {
    const {username,email,password,role} = req.body;
    if(!username || !email || !password || !role){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({
            success: false,
            message: "User already exists"
        });
    }
    const newUser = await User.create({
        name:username,
        email,
        password,
        role
    });
    const CreatedUser = await User.findById(newUser._id).select("-password -refreshToken");

    if(!CreatedUser){
        return res.status(400).json({
            success: false,
            message: "User not registered"
        });
    }
    
    return res.status(200).json({
        success: true,
        message: "User registered successfully",
        user: CreatedUser
    });
})


const LoginUser = asyncHandler(async (req, res) => {
    //get email and password from request body
    //check if user exists
    //password is correct
    //generate access token and refresh token
    //send cookie with refresh token



    //get email and password from request body
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Please enter email and password"
        })
    }

    //check if user exists
    const existedUser = await User.findOne({email});
    if(!existedUser){
        return res.status(400).json({
            success:false,
            message:"User does not exist",
        })
    }

    //password is correct
    const isPasswordCorrect = await existedUser.comparePassword(password);
    if(!isPasswordCorrect){
        return res.status(400).json({
            success:false,
            message:"Invalid password"
        })
    }

    //generate access token and refresh token
    const {accessToken,refreshToken} = await generateAccessandRefreshTokens(existedUser._id);
    
    const LoggedInUser = await User.findById(existedUser._id)
    .select("-password -refreshToken");

    const options = {
        httpOnly:true,
        secure:false,
        sameSite: "Lax",
        
    }
    console.log("TOken bn gye bhai");
    console.log(LoggedInUser);
    console.log(accessToken);
    return res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json({
        success:true,
        message:"User logged in successfully",
        user:LoggedInUser,accessToken,refreshToken
    });
});



const LogoutUser = asyncHandler(async (req,res) =>{
    console.log("Logout triggered");
    await User.findByIdAndUpdate(req.user._id,{
        refreshToken:null
    },
    {
        new:true
    });
    console.log("processing m h");
    const options = {
        httpOnly:true,
        secure:false,
        sameSite: "Lax",
    }
    return res.
    status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json({
        success:true,
        message:"User logged out successfully"
    })
})

export { RegisterUser, LoginUser, LogoutUser };