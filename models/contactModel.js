const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  companyName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  message: {
    type: String,
    required: false,
  },
  reciveInfo: {
    type: Boolean,
    required: true,
  },
})

const ContactInfo = mongoose.model('contactInfo', contactSchema)
module.exports = ContactInfo
