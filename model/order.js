const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  product_link: String,
  quantity: Number,
  summa: Number,
  currency_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'CurrencyType' },
  truck: String,
  description: String,
});

module.exports = mongoose.model('Order', orderSchema);
