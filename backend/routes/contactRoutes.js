const express = require('express')
const nodemailer = require('nodemailer')
const Contact = require('../models/Contact')

const router = express.Router()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    if (!email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    const contact = new Contact({ name, email, message })
    await contact.save()

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Message',
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    res.status(201).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact Error:', error)
    res.status(500).json({ message: 'Failed to send message' })
  }
})

module.exports = router