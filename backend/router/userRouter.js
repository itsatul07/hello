import express from 'express';
//import User from '../models/user.js';
import { RegisterUser, LoginUser,LogoutUser } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middleware/authorisation.js';
import { updateProfile } from '../controllers/updateProfile.js';
const router = express.Router();


//get signup dashboard profile
router.route('/signup').get((req,res)=>{
    res.send('signup');
})

router.get("/check-cookie", (req, res) => {
  console.log("Cookies:", req.cookies);
  res.status(200).json({
    success: true,
    message: "Cookie test passed!",
    cookies: req.cookies
  });
});

router.route('/dashboard').get(isAuthenticated,(req,res)=>{ 
    console.log(req.user);
    
    res.send('dashboard');
})

router.route("/profile").get(isAuthenticated, (req, res) => {
    return res.status(200).json({
      success: true,
      user: {
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        dob: req.user.dob,
        contact: req.user.contact,
        profession: req.user.profession,
        residentialAddress: req.user.residentialAddress
      }
    });
  })
  .patch(isAuthenticated, updateProfile);
  


// POST /signup
router.route('/signup').post(RegisterUser);

//POST /login
router.route('/login').post(LoginUser);

//secured route
router.route('/logout').post(isAuthenticated,LogoutUser);


export default router;
