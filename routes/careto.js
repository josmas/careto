module.exports = function(app){

  app.get('/caretos', function(req, res){
    res.render('caretos', {
      title: 'Caretos'
    });
  });

  app.get('/caretos/new', function(req, res){
    res.render('careto_new', {
      title: 'Add a new Caretos contact'
    });
  });

};
