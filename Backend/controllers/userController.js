const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//user registration
exports.userRegistration = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(password);
    

    const existsUser = await userModel.findOne({email});

    if (existsUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    
    

    const newUser = new userModel({
      username,
      email,
      hashedPassword,
    });

    await newUser.save();

    // generating token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(201)
      .json({ message: "User registered successfully", token, user: newUser });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "failed to register user", error: error.message });
  }
};
