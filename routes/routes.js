const express = require('express');
const sendMail = require('../controllers/sendMail')

const router = express.Router();

module.exports = router;

router.post('/email', sendMail)

