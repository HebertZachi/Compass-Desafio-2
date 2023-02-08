const user = require('../Models/UserModel');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });
const jwt =  require('jsonwebtoken')

var data;

exports.getAllUsers = async (req, res) =>{
  data = await user.find({});
  try {
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

exports.getUserById = async (req, res) =>{
  try {
    data = await user.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).send("ID Not Found");
  }
}

exports.createUser = async (req, res) => {
  const {firstName, lastName, birthDate, city, country, email, password, confirmPassword} = req.body
    
  if (!firstName){
    return res.status(422).json({msg: "A user must have a first name"})
  } else if (!lastName){
    return res.status(422).json({msg: "A user must have a last name"})
  } else if (!birthDate){
    return res.status(422).json({msg: "A user must have a Birth Date"})
  } else if (!country) {
    return res.status(422).json({msg: "A user must have a country "})
  } else if (!city){
    return res.status(422).json({msg: "A user must have a city"})
  } else if (!email) {
    return res.status(422).json({msg: "A user must have a email"})
  } else if (!password){
    return res.status(422).json({msg: "A user must have a password"})
  } else if (!confirmPassword){
    return res.status(422).json({msg: "A user must have a confirmPassword"})
  } else if (password !== confirmPassword) {
    return res.status(422).json({msg: "Passwords are not the same"})
  } else {}

  const emailAlreadyExists = await user.findOne({ email: email })
  if (emailAlreadyExists) {
    return res.status(422).json({msg: "E-mail already registered, use another e-mail"})
  }

  try {
    const createduser = await user.create(req.body);
    
    const token =  jwt.sign({id: createduser._id}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });
    
    return res.status(200).json({token, createduser});
    
  } catch (error) {
    res.status(500).send("Server Error");
  }
}

exports.Login = async (req, res) => {
  try {
    const {email, password} = req.body

    if (!email || !password) {
      return res.status(404).json({msg: "Email or Password not informed"})
    } else {}

    const userEmail = await user.findOne({ email }).select('+password')
    const correct = user.correctPassword(password, userEmail.password)
      if(!userEmail || !correct) {
        return res.status(422).json({msg: "incorrect e-mail or password"})
    }
    return res.status(200).json({status: "Login successfully"});

  } catch (error) {
    res.status(500).send("Server Error");
  }
};

exports.updateUserByID = async (req, res) =>{
  try {
    data = await user.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).send("ID Not Found");
  }
}

exports.deleteUserById = async (req, res) =>{
  try {
    data = await user.findByIdAndDelete(req.params.id);
    if (!data) res.status(404).send("Error, No user found with this ID");
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
}
