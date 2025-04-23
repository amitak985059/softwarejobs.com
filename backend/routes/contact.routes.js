const express = require('express');
const router = express.Router();



const contactController = require('../controllers/contactus.controller');

// This works because createContactUs is now properly exported
router.post('/', contactController.createContactUs);

module.exports = router;