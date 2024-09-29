const express = require('express')
const app = express()
const port = 4000

app.get('/Res', (req, res) => {
  fetch('https://api.pisports.in/public/getSportsNames.php')
  .then((Result)=>Result.json())
  .then((Result)=>res.send(Result))
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})