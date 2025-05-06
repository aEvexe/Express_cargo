const clientModel = require("../model/client");

const findAll = async (req, res) => {
  try {
    const clients = await clientModel.find({});
    res.status(200).send({ data: clients });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).send({ error: "Failed to fetch clients" });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientModel.findById(id);
    res.status(200).send({ data: client });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).send({ error: "Failed to fetch client" });
  }
};

const createClient = async (req, res) => {
  try {
    const body = req.body;
    const data = await clientModel.create(body);
    res.status(201).send({ message: "Client created", data });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).send({ error: "Failed to create client" });
  }
};

// PUT /clients/:id
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await clientModel.findByIdAndUpdate(id, body);
    res.status(200).send({ message: "Client updated", data });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).send({ error: "Failed to update client" });
  }
};

// DELETE /clients/:id
const removeClient = async (req, res) => {
  try {
    const { id } = req.params;
    await clientModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Client deleted" });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).send({ error: "Failed to delete client" });
  }
};

module.exports = {
  findAll,
  findOne,
  createClient,
  updateClient,
  removeClient,
};
