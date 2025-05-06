const statusModule = require("../model/status");

const findAll = async (req, res) => {
  try {
    const status = await statusModule.find()
    res.status(200).send({ data: status });
  } catch (error) {
    console.log("error", error.message);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await statusModule.findById(id);
    res.status(200).send({ data: status });
  } catch (error) {
    console.log("error", error.message);
  }
};

const createStatus = async (req, res) => {
  try {
    const {name, description} = req.body;
    const newOperation = await statusModule.create({name, description});

    res.status(201).send({ message: "status created", newOperation });
  } catch (error) {
    console.log("error", error.message);
  }
};

const updateStatus = async (req, res) => {
  try {
    const data = req.body
    const { id } = req.params;
    const update = await statusModule.findByIdAndUpdate(id, data);
    res.status(201).send({ message: "status updated", update});
  } catch (error) {
    console.log("error", error.message);
  }
};

const removeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await statusModule.findByIdAndDelete(id);
    res.status(200).send({ message: "status deleted" });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = {
  findAll,
  findOne,
  createStatus,
  updateStatus,
  removeStatus,
};