var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var stallSchema = new Schema({
    name: {type: String, default: 'sarthak'},
    stallName:  {type: String, default: 'sarthak enterprisers'},
    stallType:  {type: String, default: 'food'},
    total: {type: Number, default:0},
    paid: {type: [Number]}
  });

  var stall = mongoose.model('stalls',stallSchema);
  module.exports = stall;
