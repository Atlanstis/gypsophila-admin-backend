const { validationResult, buildCheckFunction } = require('express-validator');
const { isValidObjectId } = require('mongoose');

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(200).json({
      code: 400,
      message: errors
        .array()
        .map((item) => item.msg)
        .join(','),
    });
  };
};

exports = module.exports = validate;

exports.isValidObjectId = (location, fields) => {
  return buildCheckFunction(location)(fields).custom(async (value) => {
    if (!isValidObjectId(value)) {
      return Promise.reject(new Error('ID 格式错误'));
    }
  });
};
