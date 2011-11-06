var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var Careto = new Schema({
  name    :String,
  surname :String
});

var Careto = mongoose.model('Careto', Careto);

exports.saveCareto = function saveCareto(careto, next) {
  careto.save(function(err) {
    if (err) return next(err);
    next();
  });
};

exports.buildCaretoFromRequest = function buildCaretoFromRequest(req, next){
  var name = req.body.name;
  var surname = req.body.surname;
  var careto = new Careto();
  careto.name = name;
  careto.surname = surname;
  next(careto);
};
