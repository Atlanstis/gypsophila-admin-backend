const { Game } = require('../model');

exports.add = async (req, res, next) => {
  try {
    const game = new Game({ name: 'test' });
    await game.save();
    res.status(200).json({
      code: 200,
      message: 'success',
    });
  } catch (e) {
    next(e);
  }
};
