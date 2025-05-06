const operationModule = require("../model/operation");
const order_idModule = require('../model/order')

const findAll = async (req, res) => {
  try {
    const admin = await operationModule.find().populate("order_id status_id admin_id");
    res.status(200).send({ data: admin });
  } catch (error) {
    console.log("error", error.message);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const currency = await operationModule.findById(id);
    res.status(200).send({ data: currency });
  } catch (error) {
    console.log("error", error.message);
  }
};

const createOperation = async (req, res) => {
  try {
    const {order_id, status_id, operation_date, admin_id, description} = req.body;
    const newOperation = await operationModule.create({order_id, status_id, operation_date, admin_id, description});

    res.status(201).send({ message: "operation created", newOperation});
  } catch (error) {
    console.log("error", error.message);
  }
};

const updateOperation = async (req, res) => {
  try {
    const data = req.body
    const { id } = req.params;
    const data1 = await operationModule.findByIdAndUpdate(id, data);
    res.status(201).send({ message: "Operation updated", data1 });
  } catch (error) {
    console.log("error", error.message);
  }
};

const removeOperation = async (req, res) => {
  try {
    const { id } = req.params;
    await operationModule.findByIdAndDelete(id);
    res.status(200).send({ message: "Operation deleted" });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = {
  findAll,
  findOne,
  createOperation,
  updateOperation,
  removeOperation,
};
