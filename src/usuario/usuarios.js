function getuserlist(con,req,res,) {
    con.query("SELECT * FROM usuario", function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("Result: " +  JSON.stringify(result,null,2));
    });
}
exports.getuserlist = getuserlist;

function usuarioporid(con,req,res,) {
    var usuario = req.query.id_usuario;//esta variable recibe el parametro que pedimos por URL
    con.query("SELECT * FROM usuario where id_usuario="+usuario, function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("Result: " +  JSON.stringify(result,null,2));
    });
}
exports.usuarioporid = usuarioporid;

function modificar_usuario(con,req,res,) {
    var usuario = req.query.id_usuario
    var nombre = req.query.nombre
    //var dni = req.body.dni
      
    var sql = "UPDATE usuario SET nombre ='"+nombre+"' where id_usuario="+usuario;
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.modificar_usuario = modificar_usuario;

function crear_usuario(con,req,res,) {
    //var usuario = req.query.id_usuario
    var nombre = req.query.nombre
    var apellidos = req.query.apellidos
    var dni = req.query.dni
    var contrasena = req.query.contrasena
    var tipo = req.query.tipo
      
    var sql = "INSERT INTO usuario (nombre,apellidos,DNI,pass,tipo_user) VALUES ( '"+nombre+"','"+apellidos+"','"+dni+"','"+contrasena+"',"+tipo+")";
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.crear_usuario = crear_usuario;

function eliminar_usuario(con,req,res,) {
    var usuario = req.query.id_usuario

    var sql = "DELETE FROM usuario where id_usuario="+usuario;
    con.query(sql, function(err, result){
        if(err) throw err;
      
        res.json(result);
    });
}
exports.eliminar_usuario = eliminar_usuario;

// function usuarioporid(con,req,res,) {
//     var usuario = req.query.id_usuario;//esta variable recibe el parametro que pedimos por URL
//     con.query("SELECT * FROM usuario where id_usuario="+usuario, function (err, result) {
//         if (err) throw err;
//         res.json(result);
//         console.log("Result: " +  JSON.stringify(result,null,2));
//     });
// }
// exports.usuarioporid = usuarioporid;

// function usuarioporid(con,req,res,) {
//     var usuario = req.query.id_usuario;//esta variable recibe el parametro que pedimos por URL
//     con.query("SELECT * FROM usuario where id_usuario="+usuario, function (err, result) {
//         if (err) throw err;
//         res.json(result);
//         console.log("Result: " +  JSON.stringify(result,null,2));
//     });
// }
// exports.usuarioporid = usuarioporid;

// function usuarioporid(con,req,res,) {
//     var usuario = req.query.id_usuario;//esta variable recibe el parametro que pedimos por URL
//     con.query("SELECT * FROM usuario where id_usuario="+usuario, function (err, result) {
//         if (err) throw err;
//         res.json(result);
//         console.log("Result: " +  JSON.stringify(result,null,2));
//     });
// }
// exports.usuarioporid = usuarioporid;

// function usuarioporid(con,req,res,) {
//     var usuario = req.query.id_usuario;//esta variable recibe el parametro que pedimos por URL
//     con.query("SELECT * FROM usuario where id_usuario="+usuario, function (err, result) {
//         if (err) throw err;
//         res.json(result);
//         console.log("Result: " +  JSON.stringify(result,null,2));
//     });
// }
// exports.usuarioporid = usuarioporid;
