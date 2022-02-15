const express = require('express');
const app = express();
const morgan=require('morgan');
const users =  require('../usuario/usuarios');
const vehiculos = require('../vehiculos/vehiculos');
const servicios = require('../servicios/servicios');

const bodyParser = require('body-parser');
const cors = require('../../node_modules/cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Swagger
// const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

// http.createServer(app).listen(3000)
// console.log("Listening at:// port:%s (HTTP)", 3000)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// require('./index.js')(app)
//Rutas
//app.use(require('./routes/index'));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "10.192.240.14",
  port: "3307",
  user: "Desarrollador",
  password: "12345678",
  database: "php_grupal"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("SELECT * FROM usuario", function (err, result) {
//     if (err) throw err;
//     console.log("Result: " +  JSON.stringify(result,null,2));
//   });
// });
//print(JSON.stringify(result,null,2));
// let sql = "SELECT * from usuario";//aqui podemos utilizar una variable o escribirlo en la consulta
    // con.query(sql, function (err, result) {
    // if (err) throw err; OTRA FORMA ES ASÍ
    // res.json(result);
    // console.log("Result: " + JSON.stringify(result,null,2));
    // });

//1
app.get('/lista_usuarios', (req, res) => users.getuserlist(con,req,res));   //es lo q recibe, el `parametro que pedimos por url 
    
//2
app.get('/usuario_por_id_usuario', (req, res) =>users.usuarioporid(con,req,res));
    
//3
app.get('/lista_vehiculos', (req, res) => vehiculos.listavehiculos(con,req,res));
app.get('/lista_vehiculos_por_id_usuario', (req, res) => vehiculos.listavehiculosporidusuario(con,req,res));
    
//4
app.get('/vehiculo_por_id_vehiculo', (req, res) => vehiculos.vehiculo_por_id_vehiculo(con,req,res));

//5
app.get('/lista_servicios', (req, res) => servicios.lista_servicios(con,req,res)); 
app.get('/lista_servicios_por_id_vehiculo', (req, res) => servicios.lista_servicios_por_id_vehiculo(con,req,res)); 

//6
app.get('/servicio_por_id_servicio', (req, res) => servicios.servicio_por_id_servicio(con,req,res));

//7
app.get('/modificar_usuario', (req, res)=> users.modificar_usuario(con,req,res));
    
//8
app.get('/crear_usuario', (req, res)=> users.crear_usuario(con,req,res));

//9
app.get('/eliminar_usuario', (req, res)=> users.eliminar_usuario(con,req,res));

//10
app.get('/modificar_vehiculo', (req, res)=> vehiculos.modificar_vehiculo(con,req,res));
    
//11
app.get('/crear_vehiculo', (req, res)=> vehiculos.crear_vehiculo(con,req,res));

//12
app.get('/eliminar_vehiculo', (req, res)=> vehiculos.eliminar_vehiculo(con,req,res));

//13
app.get('/modificar_servicio', (req, res)=> servicios.modificar_servicio(con,req,res));

//14
app.get('/crear_servicio', (req, res)=> servicios.crear_servicio(con,req,res));

//15
app.get('/eliminar_servicio', (req, res)=> servicios.eliminar_servicio(con,req,res));

//16
app.get('/usuario_y_vehiculos', (req, res) => users.usuarioporid(con,req,res)&&vehiculos.listavehiculosporidusuario(con,req,res));

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});



