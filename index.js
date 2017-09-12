var express  = require("express"),
app      = express(),
http     = require("http"),
server   = http.createServer(app),
mongoose = require('mongoose'),
methodOverride = require("method-override"),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


var Schema = mongoose.Schema;

var ActivityShema = new Schema({
    sensor: String,
    state: String
})
var Activity = mongoose.model('ActivityShema', ActivityShema );


var router = express.Router();

router.get('/', function(req, res) {
 res.status(200).json({message:'hola', quien:"danny"});
});

router.get('/insert/:estado', function(req, res) {
  var act=new Activity({ sensor: 'desconocido', state: 'Desconocido' });
    act.save(function (err) {
       console.log(err) ;
       if (err) console.log('Error al insertar')
       else console.log('Inserccion exitosa');
    });
  console.log("Informacion remitida")
  console.log(req.params.estado)
  res.send('Se ha recivido la peticion get');
});


app.use(router);

mongoose.createConnection('mongodb://localhost/elec', function(err, res) {
  if(err) {
  console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});

