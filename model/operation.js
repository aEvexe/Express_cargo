const { Schema, model } = require("mongoose");

const operationSchema = new Schema({
  order_id: {
    type: Schema.Types.ObjectId,
    ref: "Order",
    required: [true, "Order ID is required"]
  },
  status_id: {
    type: Schema.Types.ObjectId,
    ref: "Status",
    required: [true, "Status ID is required"]
  },
  operation_date: {
    type: String,
    required: [true, "Operation date is required"],
    match: [/^\d{4}-\d{2}-\d{2}$/, "Operation date must be in YYYY-MM-DD format"] 
  },
  admin_id: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: [true, "Admin ID is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    maxlength: [500, "Description cannot exceed 500 characters"]
  }
}, {
  timestamps: true, 
  versionKey: false 
});

module.exports = model('Operation', operationSchema);
