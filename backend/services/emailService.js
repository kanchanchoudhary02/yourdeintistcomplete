const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

const sendAppointmentEmail = async (appointment) => {
  console.log('📧 sendAppointmentEmail CALLED');
  console.log('📧 Sending to:', process.env.CLINIC_EMAIL);

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CLINIC_EMAIL,
      subject: `🦷 New Appointment Request - ${appointment.name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${appointment.name}</p>
        <p><strong>Phone:</strong> ${appointment.phone}</p>
        <p><strong>Email:</strong> ${appointment.email || 'Not provided'}</p>
        <p><strong>Service:</strong> ${appointment.service}</p>
        <p><strong>Preferred Date:</strong> ${new Date(appointment.preferredDate).toDateString()}</p>
        <p><strong>Message:</strong> ${appointment.message || 'No additional message'}</p>
        <hr>
        <p style="color: gray; font-size: 12px;">
          Please contact the patient on WhatsApp/phone to confirm the appointment.
        </p>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email notification sent:', info.messageId);

    return {
      success: true,
      messageId: info.messageId
    };

  } catch (error) {
    console.error('❌ Email notification failed:', error.message);

    return {
      success: false,
      error: error.message
    };
  }
};

module.exports = { sendAppointmentEmail };