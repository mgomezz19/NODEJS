var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "Desarrollador",
  password: "12345678",
  database: "php_grupal"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM usuario", function (err, result) {
    if (err) throw err;
    console.log("Result: " +  JSON.stringify(result,null,2));
  });
});
//print(JSON.stringify(result,null,2));