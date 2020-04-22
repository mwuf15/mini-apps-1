const express = require('express')
const path = require('path')
const bodyparsesr = require('body-parser')
const app = express()
const PORT = 4000;

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
