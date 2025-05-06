const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  client_id: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: [true, "Client ID is required"]
  },
  product_link: {
    type: String,
    required: [true, "Product link is required"],
    match: [/^https?:\/\/.+/, "Invalid URL format"]
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"]
  },
  summa: {
    type: Number,
    required: [true, "Sum is required"],
    min: [0, "Sum cannot be negative"]
  },
  currency_type_id: {
    type: Schema.Types.ObjectId,
    ref: 'CurrencyType',
    required: [true, "Currency type is required"]
  },
  truck: {
    type: String,
    maxlength: [100, "Truck info can't exceed 100 characters"]
  },
  description: {
    type: String,
    maxlength: [500, "Description can't exceed 500 characters"]
  }
}, {
  timestamps: true, 
  versionKey: false 
});

module.exports = model('Order', orderSchema);

