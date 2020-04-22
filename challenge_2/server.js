
const express = require('express');
const path = require('path');
const app = express()
const PORT = 3000


app.get('/upload_json', (req, res) => {
  // console.log(req.body)
  res.json("hello")
})

app.listen(PORT, () => {
  console.log(`connected and running on port ${PORT}`)
})

app.use(express.static('client'))


// console.log(__dirname)

app.post('/upload_json', (req,res) => {
  res.send('hello')

})

