const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
  full_name: {
    type: String,
    required: [true, "Full name is required"],
    minlength: [3, "Full name must be at least 3 characters long"]
  },
  phone_number: {
    type: String,
    match: [/^\+?[0-9]{9,15}$/, "Invalid phone number format"]
  },
  address: {
    type: String,
    maxlength: [500, "Address can't exceed 500 characters"]
  },
  location: {
    type: String,
    maxlength: [200, "Location description can't exceed 200 characters"]
  },
  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, "Invalid email format"],
    unique: true
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Client', ClientSchema);
