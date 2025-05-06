const currencyTypeModel = require("../model/currency");

const findAll = async (req, res) => {
  try {
    const currencies = await currencyTypeModel.find({});
    res.status(200).send({ data: currencies });
  } catch (error) {
    console.log("error", error.message);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const currency = await currencyTypeModel.findById(id);
    res.status(200).send({ data: currency });
  } catch (error) {
    console.log("error", error.message);
  }
};

const createCurrency = async (req, res) => {
  try {
    const body = req.body;
    const data = await currencyTypeModel.create(body);
    res.status(201).send({ message: "Currency Type created", data });
  } catch (error) {
    console.log("error", error.message);
  }
};

const updateCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await currencyTypeModel.findByIdAndUpdate(id, req.body);
    res.status(200).send({ message: "Currency Type updated", data });
  } catch (error) {
    console.log("error", error.message);
  }
};

const removeCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    await currencyTypeModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Currency Type deleted" });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = {
  findAll,
  findOne,
  createCurrency,
  updateCurrency,
  removeCurrency,
};
