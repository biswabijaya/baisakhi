var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var paymentSchema = new Schema({
    nameEvent:  {type: String, default: 'sarthak'},
    head:  {type: String, default: 'sarthak'},
    subHead:  {type: String, default: 'bbsr'},
    paidTo:  {type: String, default: 'sarthak'},
    amount : { type: Number },
    paymentBy:  {type: String, default: 'cash'},
    paymentDate : { type : Date, default: Date.now },


  });

  var payment = mongoose.model('payments',paymentSchema);
  module.exports = payment;
