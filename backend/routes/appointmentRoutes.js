const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controllers/appointmentcontroller');
const { appointmentValidationRules, validate } = require('../middleware/validateappointment');

router.post('/', appointmentValidationRules, validate, createAppointment);

module.exports = router;