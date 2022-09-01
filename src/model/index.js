const mongoose = require('mongoose');
const { DB_URI, DB_PASS, DB_USER } = require('../config/config.default');
const Game = require('./game.model');

// 连接数据库
mongoose.connect(DB_URI, {
  authSource: 'admin',
  user: DB_USER,
  pass: DB_PASS,
});

const db = mongoose.connection;

// 连接失败时
db.on('error', (err) => {
  console.log('MongoDB 数据库连接失败', err);
});

// 连接成功时
db.once('open', function () {
  console.log('MongoDB 数据库连接成功');
});

module.exports = {
  Game,
};
