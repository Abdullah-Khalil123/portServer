const express = require('express')
const router = express.Router()
const Contact = require('../models/contactModel')

router.post('/', async (req, res) => {
  try {
    const contactInfo = req.body
    const newContact = new Contact(contactInfo)
    const savedContact = await newContact.save()
    res.status(201).send(savedContact)
  } catch (error) {
    if (error.code == 11000)
      res
        .status(500)
        .send({ code: error.code, message: 'Dublicate Email Entry' })
    else res.status(500).send(error)
  }
})

router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Contact Route',
  })
})

router.post('/', (req, res) => {})

module.exports = router
