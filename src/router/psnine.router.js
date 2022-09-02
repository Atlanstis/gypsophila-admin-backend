const express = require('express');
const psnineCtrl = require('../controller/psnine.controller');
const psnineValidator = require('../validator/psnine.validator');
const router = express.Router();

router.get('/add', psnineCtrl.add);

router.get('/game/search', psnineValidator.gameSearch, psnineCtrl.gameSearch);

module.exports = router;
