import sqlite3 from 'sqlite3';

//creo o abro la base de datos
const db=new sqlite3.Database('./database.db',(err)=>{

    if(err){
        console.log(err.message);
    }else{
        console.log('Connecting to SQLITE');
    }
});

export default db;


