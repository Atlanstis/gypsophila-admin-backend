const { Game } = require('../model');
const { GameDetailCrawler } = require('../crawler');
const { CODE_OK } = require('../constants/http-code');

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

// 从 PSNINE 查找游戏，获取游戏信息
exports.gameSearch = async (req, res, next) => {
  try {
    const crawler = new GameDetailCrawler({ id: req.query.gameId });
    const detail = await crawler.analysis();
    res.status(CODE_OK).json({
      code: CODE_OK,
      data: detail,
      message: '成功',
    });
  } catch (e) {
    next(e);
  }
};
