const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  full_name: {
    type: String,
    required: [true, "Full name is required"],
    minlength: [3, "Full name must be at least 3 characters long"]
  },
  user_name: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    minlength: [3, "Username must be at least 3 characters long"],
    match: [/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"]
  },
  phone_number: {
    type: String,
    match: [/^\+?[0-9]{9,15}$/, "Invalid phone number format"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Email format is invalid"]
  },
  tg_link: {
    type: String,
    match: [/^https:\/\/t\.me\/[a-zA-Z0-9_]+$/, "Telegram link must start with https://t.me/"]
  },
  token: {
    type: String,
    default: null
  },
  is_creator: {
    type: Boolean,
    default: false
  },
  is_active: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    maxlength: [500, "Description can't exceed 500 characters"]
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Admin', adminSchema);

