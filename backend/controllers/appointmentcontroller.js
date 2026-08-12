const Appointment = require('../models/Appointment');
const { sendAppointmentEmail } = require('../services/emailService');

// @desc   Create new appointment
// @route  POST /api/appointments
const createAppointment = async (req, res) => {
  try {
    const { name, phone, email, service, preferredDate, message } = req.body;

    console.log('📝 Creating appointment...');

    const appointment = await Appointment.create({
      name,
      phone,
      email,
      service,
      preferredDate,
      message
    });

    console.log('✅ Appointment saved:', appointment._id);

    console.log('📧 Calling email service...');

    const emailResult = await sendAppointmentEmail(appointment);

    console.log('📧 Email service result:', emailResult);

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      data: appointment,
      emailSent: emailResult.success
    });

  } catch (error) {
    console.error('❌ Error creating appointment:', error);

    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.'
    });
  }
};

module.exports = { createAppointment };