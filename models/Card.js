const mongoose = require('mongoose')
const SALT_FACTOR = 10

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
}, {timestamps: true})

const User = mongoose.model('Card', cardSchema);

module.exports = User