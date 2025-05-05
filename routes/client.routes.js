const express = require('express');
const router = express.Router();

const {
  findAll,
  findOne,
  createClient,
  updateClient,
  removeClient,
} = require('../controllers/client.controller');

router.get('/all', findAll);
router.get('/:id', findOne);
router.post('/create', createClient);
router.put('/:id', updateClient);
router.delete('/:id', removeClient);

module.exports = router;
