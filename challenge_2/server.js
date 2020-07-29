const express = require('express');
const parser = require('body-parser');
const path = require ('path');
const app = express();
const PORT = 3000;
const appMethod = require ('./client/app.js');

app.use(parser.urlencoded({extended:true}));

app.post('/csv', (req, res) => {
  // console.log('req:', req.body.csvText);
  res.send(req.body.csvText)
})

// app.get('/csv', (req,res) => {
//   console.log(req.body)
// })

app.use(express.static(path.join(__dirname, 'client')));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})