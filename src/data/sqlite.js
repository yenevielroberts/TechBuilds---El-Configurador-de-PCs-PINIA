//Comando para ejecutar este archivo node src/data/sqlite.js

path=require('path')
const path = require('path');
const sqlite=require('sqlite3');

const db=new sqlite.Database(
    path.resolve(__dirname, '../../database.db'),
    (error)=>{
        if(error){
            return console.log(error)
        }

        const sql=`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) NOT NULL
        )`

        //Ejecuto la consulta sql y paso como segundo argumento una función flecha para errores
        db.run(sql,(error)=>{
            if(error){
                return console.log(error)
            }
        })
    }

)    
module.exports=db;