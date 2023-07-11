const PotentielThreadController = require('../controllers/potentielThread-controller');

const potentielThreadRoute = require('express').Router();

potentielThreadRoute.route('/').post(PotentielThreadController.addPotentielThread)

module.exports = potentielThreadRoute