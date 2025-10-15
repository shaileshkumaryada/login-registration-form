const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/user.js');
const router = express.Router();
const jwt = require('jsonwebtoken');
// const user = require('../model/user.js');
const JWT_SECRET = 'your_secret_key';
router.post('/login', async (req, res) => {
  try {
    // const { email, password } = req.body;
    const {email, password} = req.body

    // const user = await User.findOne({ email });
    // if (!user) {
    //   return res.status(400).json({ message: "user does not exist" });
    // }
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({message:"user does not exist"});
    }

    // const salt = await bcrypt.compare(password,user.password);
    // if (!salt) {
    //   return res.status(400).json({message: "Invailid password"});
    // }
    const  salt = await bcrypt.compare(password,user.password);
    if (!salt){
      return res.status(400).json({message:"Invailid password"})
    }

    // jwt token banaein
    // const token = jwt.sign(
    //   {userid:user._id,email: user.email},
    //   JWT_SECRET,
    //   {expiresIn:'1h'}
    // );
    const token = jwt.sign(
      {userid:user._id,email:user.email},
      JWT_SECRET,
      {expiresIn:'1h'}
    );
   

    res.status(200).json({ message: "User login successfully",
      token: token,
      name: user.name,
      email: user.email
      
     });
  } catch (error) {
    res.status(500).json({ message: "error in login" });
  }
});

module.exports = router;
