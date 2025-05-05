const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  phone_number: { type: String },
  address: { type: String },
  location: { type: String },
  email: { type: String },
});

module.exports = mongoose.model('Client', ClientSchema);
