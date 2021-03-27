const User = require('../models/UserModels')

exports.UserValidator = (req, res, next) => {
    req.check('email', 'Email has been used.').isEmail()
    req.check('email', 'Email is required.').not().isEmpty()
    req.check('password', 'Password is required.').not().isEmpty();
    req.check('password', 'Password must be more than 6 characters').isLength({min:6});
    req.check('password_confirm', 'Password confirm is required.').not().isEmpty();
    req.check('password_confirm','Password mismatch').equals(req.body.password);

    //check for errors
    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.json({status: 400, message: firstError});
    }
    next();
}