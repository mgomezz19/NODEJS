function listavehiculos(con,req,res,) {
    var usuario = req.query.id_usuario;//esta variable recibe el parametro que pedimos por URL
    con.query("SELECT * FROM vehiculo", function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("Result: " +  JSON.stringify(result,null,2));
    });
}
exports.listavehiculos = listavehiculos;

function listavehiculosporidusuario(con,req,res,) {
    var usuario = req.query.id_usuario;//esta variable recibe el parametro que pedimos por URL
    con.query("SELECT * FROM vehiculo where id_usuario="+usuario, function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("Result: " +  JSON.stringify(result,null,2));
    });
}
exports.listavehiculosporidusuario = listavehiculosporidusuario;

function vehiculo_por_id_vehiculo(con,req,res,) {
    var vehiculo = req.query.id_vehiculo;//esta variable recibe el parametro que pedimos por URL
    con.query("SELECT * FROM vehiculo where id_vehiculo="+vehiculo, function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("Result: " +  JSON.stringify(result,null,2));
    });
}
exports.vehiculo_por_id_vehiculo = vehiculo_por_id_vehiculo;

function modificar_vehiculo(con,req,res,) {
    var vehiculo = req.query.id_vehiculo
    var marca = req.query.marca

    var sql = "UPDATE vehiculo SET marca ='"+marca+"' where id_vehiculo="+vehiculo;
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.modificar_vehiculo = modificar_vehiculo;

function crear_vehiculo(con,req,res,) {
    //var usuario = req.query.id_usuario
    var matricula = req.query.matricula
    var marca = req.query.marca
    var modelo = req.query.modelo
    var usuario = req.query.id_usuario
      
    var sql = "INSERT INTO vehiculo (matricula,marca,modelo,id_usuario) VALUES ( '"+matricula+"','"+marca+"','"+modelo+"',"+usuario+")";
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.crear_vehiculo = crear_vehiculo;

function eliminar_vehiculo(con,req,res,) {
    var vehiculo = req.query.id_vehiculo

    var sql = "DELETE FROM vehiculo where id_vehiculo="+vehiculo;
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.eliminar_vehiculo = eliminar_vehiculo;