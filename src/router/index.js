const express = require('express');
const psnineRouter = require('./psnine.router');

const router = express.Router();

// psnine 相关路由
router.use('/psnine', psnineRouter);

module.exports = router;
