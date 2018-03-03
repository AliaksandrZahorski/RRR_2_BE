let router = require('express').Router();

let userController = require('./user.controller');

router.post('/', userController.find);

module.exports = router;
