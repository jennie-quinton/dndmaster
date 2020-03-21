const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = mongoose.model('users');
const EXPIRY_TIME = 604800; // 1 week

module.exports = {
  async login(req, res) {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          errorCode: info.errorCode || 'GENERAL_ERROR',
          message: info.message || 'Something is not right'
        });
      }

      req.login(user, { session: false }, async error => {
        if (error) {
          res.send(error);
        }

        // generate a signed json web token with the contents of user object and return it in the response
        const token = jwt.sign(user.toJSON(), keys.jwtSecret, {
          expiresIn: EXPIRY_TIME
        });

        res.json({
          user: {
            _id: user._id,
            email: user.email
          },
          token
        });
      });
    })(req, res);
  },
  async create(req, res) {
    try {
      const user = await new User({
        email: req.body.email,
        password: req.body.password
      }).save();

      const token = jwt.sign(user.toJSON(), keys.jwtSecret, {
        expiresIn: EXPIRY_TIME
      });

      res.status(201).json({
        user: {
          _id: user._id,
          email: user.email
        },
        token
      });
    } catch (error) {
      if (error.errors && error.errors.email) {
        return res.status(422).send({
          errorCode: 'INVALID_EMAIL',
          error
        });
      }

      return res.status(422).send({
        errorCode: 'USER_CREATION_FAIL',
        error
      });
    }
  }
};
