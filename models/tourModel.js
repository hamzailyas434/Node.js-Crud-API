const mongoose = require('mongoose');
const tourScheme = new mongoose.Schema({
  name: {
    type: String,
    requires: [true, `A Tour must have a name`],
    unique: true
  },
  raiting: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, `A Tour must have a price`]
  }
});
const Tour = mongoose.model('Tour', tourScheme);

module.exports = Tour;
