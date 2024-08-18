const express = require('express')
const mongoose = require('mongoose')
const contactRoute = require('./routes/contactRoute')
const cors = require('cors')

const app = express()
const PORT = 5000 || process.env.PORT
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('PORT SERVER')
})
app.use('/contact', contactRoute)

mongoose
  .connect(
    'mongodb+srv://admin:admin@testing.hzylzer.mongodb.net/?retryWrites=true&w=majority&appName=Testing'
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on Port : ${PORT}`))
  })
  .catch((error) => console.log(`Error Connecting to database ${error}`))
