const mysql2= require("mysql2");
const config=require("../config");
let connection = mysql2.createConnection(config.db);

connection.connect(function(err){
  if(err){
    console.log(err);
  }


 console.log("Bağlantı başarılı");
});

module.exports=connection.promise();