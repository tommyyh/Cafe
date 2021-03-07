const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('about.html');
});

// Contact post route
router.post('/', async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `${req.body.name}`,
      to: process.env.GMAIL,
      subject: 'Beanery email inbox',
      text: `Name: ${req.body.name}, Email: ${req.body.email}, Message: ${req.body.msg}`,
      html: `Name: ${req.body.name}, Email: ${req.body.email}, Message: ${req.body.msg}`,
    });

    res.redirect('/');
  } catch {
    res.redirect('/');
  }
});

module.exports = router;
