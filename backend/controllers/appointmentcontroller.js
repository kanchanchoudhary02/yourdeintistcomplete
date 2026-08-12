const Appointment = require('../models/Appointment');
const { sendAppointmentEmail } = require('../services/emailService');

// @desc   Create new appointment
// @route  POST /api/appointments
const createAppointment = async (req, res) => {
  try {
    const { name, phone, email, service, preferredDate, message } = req.body;

    const appointment = await Appointment.create({
      name,
      phone,
      email,
      service,
      preferredDate,
      message
    });

    // Send email notification (doesn't block the response if it fails)
    sendAppointmentEmail(appointment);

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      data: appointment
    });

  } catch (error) {
    console.error('Error creating appointment:', error.message);
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.'
    });
  }
};

module.exports = { createAppointment };