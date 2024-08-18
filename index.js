require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const contactRoute = require('./routes/contactRoute')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT
const DB_URI = process.env.DB_URI

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('PORT SERVER')
})
app.use('/contact', contactRoute)

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on Port : ${PORT}`))
  })
  .catch((error) => console.log(`Error Connecting to database ${error}`))

module.exports = app
