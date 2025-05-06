const { Schema, model } = require("mongoose");

const statusSchema = new Schema({
  name: {
    type: String,
    required: [true, "Status name is required"],
    minlength: [2, "Status name must be at least 2 characters long"],
    unique: true
  },
  description: {
    type: String,
    maxlength: [500, "Description can't exceed 500 characters"]
  }
}, {
  timestamps: true, 
  versionKey: false 
});

module.exports = model('Status', statusSchema);
