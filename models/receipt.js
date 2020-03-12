var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var receiptSchema = new Schema({
    nameEvent:  {type: String, default: 'sarthak'},
    head:  {type: String, default: 'sarthak'},
    nameParty:  {type: String, default: 'bbsr'},
    amount : { type: Number },
    through:  {type: String, default: 'cash'},
    date : { type : Date, default: Date.now }


  });

  var receipt = mongoose.model('receipt',receiptSchema);
  module.exports = receipt;
