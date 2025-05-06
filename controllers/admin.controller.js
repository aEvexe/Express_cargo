const adminModule = require("../model/admin");
const operation = require("../model/operation")

const findAll = async (req, res) => {
  try {
    const admin = await adminModule.find()
    res.status(200).send({ data: admin });
  } catch (error) {
    console.log("error", error.message);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const currency = await adminModule.findById(id);
    res.status(200).send({ data: currency });
  } catch (error) {
    console.log("error", error.message);
  }
};

const createAdmin = async (req, res) => {
  try {
    const {full_name, user_name, password, phone_number, email, tg_link, token, is_creator, is_active, description} = req.body;
    const data = await adminModule.create({full_name, user_name, password, phone_number, email, tg_link, token, is_creator, is_active, description});
    res.status(201).send({ message: "Admin created", data });
  } catch (error) {
    console.log("error", error.message);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const data = req.body
    const { id } = req.params;
    await adminModule.findByIdAndUpdate(id, data);
    res.status(201).send({ message: "Admin updated" });
  } catch (error) {
    console.log("error", error.message);
  }
};

const removeAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await adminModule.findByIdAndDelete(id);
    res.status(200).send({ message: "Admin deleted" });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = {
  findAll,
  findOne,
  createAdmin,
  updateAdmin,
  removeAdmin,
};