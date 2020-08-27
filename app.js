const express = require('express')
const app = express()
const port = 3000
const host = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})

console.log(`Running on http://${host}:${port}`);
