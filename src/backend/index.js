import express from 'express';
import cors from 'cors';
import db from './sqlite.js'

const app=express();
app.use(express.json());
app.use(cors());

//Creo una tabla
db.run(`CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(100),
        email VARCHAR(100)
)`);

//RUTA GET

app.get('/usuarios',(req,res)=>{
    //all() devuelve varias filas. []parametros vacios, la función flecha callback. row es un array de objectos
    db.all('SELECT * FROM users',[],(err,rows)=>{
        if(err){
            res.status(500).json(err);
            return;//Evita que se siga ejecutando el código
        }
        res.json(rows);
    })
})


// RUTA POST
app.post('/news/usuarios', (req, res) => {
  const { nombre, email } = req.body;
  //run() no devuelve filas. ? placeholders, evitar sql Injection. [] parametros, el primer ? se reemplaza por nombre
  db.run(
    'INSERT INTO users (nombre, email) VALUES (?, ?)',
    [nombre, email],
    function (err) {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.json({ id: this.lastID });//SQLITE usa this para devolver información del query y solo funciona con function() y no con funciones flecha
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
