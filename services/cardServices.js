const Card = require("../models/Card")

module.exports = {
  create: (body) => {
    const newCard = new Card(body);
    return newCard.save();
  },
  getCards: () => Card.find({ is_active: true }),
  getCard: (id) => Card.findById(id),
  updateCard: (card, body) => {
    Object.assign(card, body);
    return card.save();
  }
};