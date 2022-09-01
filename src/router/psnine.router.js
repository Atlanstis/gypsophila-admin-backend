const express = require('express');
const psnineCtrl = require('../controller/psnine.controller');
const router = express.Router();

router.get('/add', psnineCtrl.add);

module.exports = router;
