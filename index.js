var express  = require("express"),
app      = express(),
http     = require("http"),
server   = http.createServer(app),
methodOverride = require("method-override"),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
 res.status(200).json({message:'hola', quien:"danny"});
});

router.get('/insert/:estado', function(req, res) {
  console.log("Informacion remitida")
  console.log(req.params.estado)
  res.send('Se ha recivido la peticion get');
});


app.use(router);


app.listen(3000, function() {
   console.log("Node server running on http://localhost:3000");
});


