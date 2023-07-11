const FarmThreadController = require('../controllers/farmThread-controller');


const farmThreadRoute = require('express').Router();

farmThreadRoute.route('/')
    .get(FarmThreadController.getFarmThread)
    .post(FarmThreadController.addFarmThread)

module.exports = farmThreadRoute