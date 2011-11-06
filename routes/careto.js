var mongoose = require('mongoose'),
    Careto   = require('../models/careto');

module.exports = function(app){

  app.get('/caretos', function(req, res){
    var CaretoModel = mongoose.model('Careto', Careto);
    CaretoModel.find({}, function(err, allCaretos) {
      if (err){
        req.flash('error', 'Problems accessing the DB, please try again later');
        res.redirect('/');
      }
      else {
        res.render('caretos', {
          title: 'Caretos',
          allCaretos: allCaretos,
          flash: req.flash()
        });
      }
    });
  });

  app.get('/careto/new', function(req, res){
    res.render('careto_new', {
      title: 'Add a new Caretos contact',
      flash: req.flash()
    });
  });

  app.post('/careto', function(req, res) {
    Careto.buildCaretoFromRequest(req, function(careto) {
      Careto.saveCareto(careto, function(err){
        if (err){
          req.flash('error', 'Your entry could not be saved, please try again later');
          res.redirect('/');
        }
        else {
          req.flash('info', 'Your entry has been saved!');
          res.render('index', {
            title: 'Caretos',
            flash: req.flash()
          });
        }
      });
    });

  });

};
