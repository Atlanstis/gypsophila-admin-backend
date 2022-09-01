const mongoose = require('mongoose');
const baseModel = require('../constants/base-model');

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ...baseModel,
});

module.exports = mongoose.model('Game', schema);
