var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var eventSchema = new Schema({
    nameEvent:  {type: String, default: 'sarthak'},
    location:  {type: String, default: 'bbsr'},
    dateFrom : { type : Date, default: Date.now },
    dateTo : { type : Date, default: Date.now },
    noOfDays : { type: Number }

  });

  var event = mongoose.model('events',eventSchema);
  module.exports = event;
