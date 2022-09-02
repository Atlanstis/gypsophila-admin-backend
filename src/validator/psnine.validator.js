const { query } = require('express-validator');
const validate = require('../middleware/validate');

exports.gameSearch = validate([
  query('gameId').notEmpty().withMessage('游戏 ID 不能为空'),
  query('gameId').custom(async (val) => {
    if (val && isNaN(Number(val))) {
      return Promise.reject(new Error('游戏 ID 格式错误'));
    }
  }),
]);
