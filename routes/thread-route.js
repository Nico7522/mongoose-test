const ThreadController = require('../controllers/thread-controller');

const threadRoute = require('express').Router();

threadRoute.route('/').post(ThreadController.addThread)

module.exports = threadRoute