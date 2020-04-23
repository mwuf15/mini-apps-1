const express = require('express')
const path = require('path')
const bodyparsesr = require('body-parser')
const app = express()
const PORT = 4000;
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hackreactor',
    database: 'checkout'
})
connection.connect()

connection.query('select * from form1', (err, data) => {
  if (err){
    console.log(err)
  }else {
    console.log(data)
  }
})

// app.get('/', (req, res) => {
//   res.send('request recieved')
// });

app.post('/', (req,res) =>{
  res.send('request posted')
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Running and listening on Port: ${PORT}`)
});
