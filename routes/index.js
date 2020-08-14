const express = require('express');
const router = express.Router();
const cardRoutes = require('./cardRoutes');

router.get('/', (req,res) => res.status(200).send({message: 'Server on'}));
router.use(cardRoutes);

module.exports = router