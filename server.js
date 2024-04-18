require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('first server')
  })

  app.get('/about', (req, res) => {
    res.send('about page')
  })
  app.get('/blog', (req, res) => {
    res.send('Blog page')
  })
  app.get('/product', (req, res) => {
    res.send('Product page')
  })

  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
