const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json());


// Termékek lekérdezései endpoint
app.get('/termekek', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: '192.168.1.101',
      user: 'termekek',
      password: 'termekek',
      database: 'termekek'
    })
    
    connection.connect()
    
    connection.query('SELECT * FROM butor', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows);
      res.send(rows);
    })
    
    connection.end()
})

// Termék felviteli endpoint
app.post('/termek_felvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: '192.168.1.101',
      user: 'termekek',
      password: 'termekek',
      database: 'termekek'
    })
    
    connection.connect()
    
    // Az 'id' azért nem szerepel benne mert az úgy is NULL meg AUTO_INCREMENT és így felesleges beleírni.
    connection.query('INSERT INTO termekek.butor (nev, ar, szin, meret, anyag) VALUES ("'+req.body.bevitel1+'", '+req.body.bevitel2+', "'+req.body.bevitel3+'", "'+req.body.bevitel4+'", "'+req.body.bevitel5+'");', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows);
      res.send(rows);
    })
    
    connection.end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})