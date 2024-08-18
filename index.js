require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const contactRoute = require('./routes/contactRoute')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000 // Fallback to port 3000 if not set
const DB_URI = process.env.DB_URI

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.status(200).send({ message: 'Connected to Server' })
})
app.use('/contact', contactRoute)

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

// Serverless Function Handler
module.exports = async (req, res) => {
  // Ensure DB connection before handling the request
  await connectToDatabase()

  // Use Express to handle requests
  await new Promise((resolve, reject) => {
    app(req, res, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}
