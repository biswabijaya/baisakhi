var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var stallTypeSchema = new Schema({
    stallType:  {type: String, default: 'food'},
  });

  var stallType = mongoose.model('stallType',stallTypeSchema);
  module.exports = stallType;
