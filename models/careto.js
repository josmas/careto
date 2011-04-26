var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var Careto = new Schema({
  firstName :String
  surname   :String
});

mongoose.model('Careto', Careto);
