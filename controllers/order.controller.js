const orderModel = require("../model/order");

const findAll = async (req, res) => {
  try {
    const orders = await orderModel.find().populate("client_id");
    res.status(200).send({ data: orders });
  } catch (error) {
    console.log("error", error.message);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderModel.findById(id);
    res.status(200).send({ data: order });
  } catch (error) {
    console.log("error", error.message);
  }
};

const createOrder = async (req, res) => {
  try {
    const body = req.body;  
    const data = await orderModel.create(body);
    res.status(201).send({ message: "Order created", data });
  } catch (error) {
    console.log("error", error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await orderModel.findByIdAndUpdate(id, req.body);
    res.status(200).send({ message: "Order updated", data });
  } catch (error) {
    console.log("error", error.message);
  }
};

const removeOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await orderModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Order deleted" });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = {
  findAll,
  findOne,
  createOrder,
  updateOrder,
  removeOrder,
};
