
const express = require('express');
const path = require('path');
const app = express()
const PORT = 3000


// app.get('/', (req, res) => {
//   res.send('Hello Human')
// })
app.use(express.static('client'))
// console.log(__dirname)
app.post('/upload_json', (req,res) => {
  console.log()
  res.end('data')
})

app.listen(PORT, () => {
  console.log(`connected and running on port ${PORT}`)
})
