var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var partySchema = new Schema({
    nameParty:  {type: String, default: 'sarthak'},
    address:  {type: String, default: 'bbsr'},
    phoneNo:  {type: String, default: '1234567890'},
    district:  {type: String, default: 'bbsr'},
    state:  {type: String, default: 'odisha'},
    pin:  {type: String, default: '1234567890'},


  });

  var party = mongoose.model('parties',partySchema);
  module.exports = party;
