const express = require('express')
const mongoose = require('mongoose')
const contactRoute = require('../routes/contactRoute')
const cors = require('cors')

const app = express()
const PORT = 3000 || process.env.PORT
app.use(cors())
app.use(express.json())

app.use('/contact', contactRoute)

mongoose
  .connect('mongodb://localhost:27017/test')
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on Port : ${PORT}`))
  })
  .catch((error) => console.log(`Error Connecting to database ${error}`))
