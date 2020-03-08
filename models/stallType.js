var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var stallSchema = new Schema({
    stallType:  {type: String, default: 'food'},
    stallFrom: {type: Number, default:0},
    stallTo: {type: Number, default:0},
    noOfStall: {type: Number}
  });

  var stall = mongoose.model('stalls',stallSchema);
  module.exports = stall;
