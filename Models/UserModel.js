const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  id: ObjectId,
  firstName: {
    type: String,
    required: [true, 'A user must have a first name']
  },
  lastName: {
    type: String,
    required: [true, 'A user must have a last name']
  },
  birthDate: {
    type: String,
    required: [true, 'User must have a date of birth']
  },
  city: {
    type: String,
    required: [true, 'Need to inform city']
  },
  country:{
    type: String,
    required: [true, 'Need to inform country']
  },
  email:{
    type: String,
    required: [true, 'User needs an email'],
    validate: [validator.isEmail, "Please provide a valid email"]
    // unique: true
  },
  password:{
    type: String,
    required: [true, 'User needs a password']
  },
  confirmPassword:
  {
    type: String,
    required: [true, 'User needs to confirm password']
  }
});

userSchema.pre('save', async function(next){
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12)

  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};


const user = mongoose.model('Users', userSchema);
module.exports = user;