
const express = require ('express');
const path = require('path');
const app = express();
const PORT = 3000;




// app.get('/', (req, res)=>{
//   res.send('you got it')
// })


// app.use(express.static('dist'))
app.use(express.static(path.join(__dirname, './client/dist')))
console.log(path.join(__dirname, './client/dist'))
// app.use(express.static(path.join(__dirname, '/dist')))

app.listen(PORT, ()=> {
  console.log(`Running and Listening on port: ${PORT}` )
})
