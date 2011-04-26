var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/caretos');

var TestModel = new Schema({
  name : { type: String, default: 'joss' },
  surname : { type: String, default: 'dom'}
});

mongoose.model('TestModel', TestModel);

var testModel = mongoose.model('TestModel');
var instance = new testModel();
instance.save(function (err){
  if (err) {
    throw err;
  }
  console.log('Saved!');
  mongoose.disconnect();
});

