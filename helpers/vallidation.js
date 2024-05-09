// Importing necessary functions from the express-validator library
const { body, validationResult } = require('express-validator');

const userSighUp = [
    body('email')
        .isEmail().normalizeEmail().withMessage('Email Must Be Required'),

    body('mobileNumber')
        .notEmpty().withMessage('Mobile Number must be required')
        .isLength({ min: 10 }).withMessage('Mobile Number Must Be 10 Digits'),

    body('password')
        .notEmpty().withMessage('Password must be required')
        .isLength({ min: 8 }).withMessage('Password should be at least 8 characters long')
];
// Validation rules for user login
const userLogin = [
    body('email')
        .isEmail().normalizeEmail().withMessage('Email Must Be Required'),

    body('password')
        .notEmpty().withMessage('Password must be required')
        .isLength({ min: 8 }).withMessage('Password should be at least 8 characters long')
];

const subAdminCreateValidate = [
    body('mobileNumber')
        .notEmpty().withMessage('Mobile Number must be required')
        .isLength({ min: 10 }).withMessage('Mobile Number Must Be 10 Digits'),

    body('password')
        .notEmpty().withMessage('Password must be required')
        .isLength({ min: 8 }).withMessage('Password should be at least 8 characters long')
];

const passwordVallidate = [
    body('password')
        .notEmpty().withMessage('Password must be required')
        .isLength({ min: 8 }).withMessage('Password should be at least 8 characters long'),
    body('confirm_password')
        .notEmpty().withMessage('Password must be required')
        .isLength({ min: 8 }).withMessage('Password should be at least 8 characters long')
]

// Middleware function to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            msg: errors.errors[0].msg
        });
    }
    next();
};

// Exporting validation rules and error handling middleware
module.exports = {
    userLogin,
    userSighUp,
    subAdminCreateValidate,
    passwordVallidate,
    handleValidationErrors
};
