const express = require('express');
const router = express.Router()
const cardController = require('../controllers/cardController');

router.post('/cards', cardController.create);
router.get('/cards', cardController.getCards);
router.get('/card/:id', cardController.getCard);
router.put('/card/:id', cardController.updateCard);
router.delete('/card/:id', cardController.deleteCard);

module.exports = router