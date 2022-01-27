function lista_servicios_por_id_vehiculo(con,req,res,) {
    var vehiculo = req.query.id_vehiculo;//esta variable recibe el parametro que pedimos por URL
    con.query("SELECT * FROM servicio where id_vehiculo="+vehiculo, function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("Result: " +  JSON.stringify(result,null,2));
    });
}
exports.lista_servicios_por_id_vehiculo = lista_servicios_por_id_vehiculo;

function servicio_por_id_servicio(con,req,res,) {
    var servicio = req.query.id_servicio;//esta variable recibe el parametro que pedimos por URL
    con.query("SELECT * FROM servicio where id_servicio="+servicio, function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("Result: " +  JSON.stringify(result,null,2));
    });
}
exports.servicio_por_id_servicio = servicio_por_id_servicio;

function modificar_servicio(con,req,res,) {
    var servicio = req.query.id_servicio
    var descripcion = req.query.descripcion

    var sql = "UPDATE servicio SET descripcion ='"+descripcion+"' where id_servicio="+servicio;
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.modificar_servicio = modificar_servicio;

function crear_servicio(con,req,res,) {
    //var usuario = req.query.id_usuario
    var nombre = req.query.nombre
    var fecha = req.query.fecha
    var descripcion = req.query.descripcion
    var vehiculo = req.query.id_vehiculo
      
    var sql = "INSERT INTO servicio (nombre,fecha,descripcion,id_vehiculo) VALUES ( '"+nombre+"','"+fecha+"','"+descripcion+"',"+vehiculo+")";
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.crear_servicio = crear_servicio;

function eliminar_servicio(con,req,res,) {
    var servicio = req.query.id_servicio

    var sql = "DELETE FROM servicio where id_servicio="+servicio;
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.eliminar_servicio = eliminar_servicio;
