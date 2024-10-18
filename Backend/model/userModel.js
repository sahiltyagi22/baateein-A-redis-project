const mongooose = require("mongoose");

const userSchema = new mongooose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  hashedPassword: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const userModel = mongooose.model('userModel' , userSchema)


module.exports = userModel;