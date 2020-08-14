const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
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

cardSchema.pre('save',  function(next){
  const user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, (err, salt)=>{
    if(err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err) return next(err);
      user.password = hash
      next();
    })
  })
});

const User = mongoose.model('Card', cardSchema);

module.exports = User