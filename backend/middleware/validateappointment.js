const { body, validationResult } = require('express-validator');

const appointmentValidationRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),

  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[6-9]\d{9}$/).withMessage('Enter a valid 10-digit Indian phone number'),

  body('email')
    .optional({ checkFalsy: true })
    .isEmail().withMessage('Enter a valid email address'),

  body('service')
    .trim()
    .notEmpty().withMessage('Service is required'),

  body('preferredDate')
  .notEmpty()
  .withMessage('Preferred date is required')
  .isISO8601()
  .withMessage('Enter a valid date')
  .custom((value) => {
    const selectedDate = new Date(value);

    if (Number.isNaN(selectedDate.getTime())) {
      throw new Error('Enter a valid date');
    }

    return true;
  }),

  body('message')
    .optional({ checkFalsy: true })
    .trim()
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: errors.array()[0].msg,
      allErrors: errors.array()
    });
  }
  next();
};

module.exports = { appointmentValidationRules, validate };