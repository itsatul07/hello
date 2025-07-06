
// controllers/user.controller.js
import {User} from '../models/user.models.js';

const updateProfile = async (req, res) => {
  try {
    
    const {name, email, role, dob,contact,profession,residentialAddress} = req.body;
    //console.log(name, email, role, dob,contact,profession,residentialAddress);
    const userId = req.user._id; // comes from middleware
    //const { username, email } = req.body;
    //console.log(userId);
    const user = await User.findById(userId);
    console.log(user);

    await User.findByIdAndUpdate(
      userId,
      { name: name,
        email: email,
        role:role,
        dob:dob,
        contact:contact,
        profession:profession,
        residentialAddress:residentialAddress
      },
      { new: true, runValidators: true }
    );
    const updatedUser = await User.findById(userId);
    console.log(updatedUser);

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export {updateProfile};