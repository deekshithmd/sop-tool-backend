const express = require('express');
const sendMail = require('../controllers/sendMail')

const router = express.Router();

module.exports = router;

// route to get email data and send email
router.post('/email', sendMail)

