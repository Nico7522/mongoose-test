const farmThreadRoute = require('./farmThread-route');
const potentielThreadRoute = require('./potentielThread-route');
const threadRoute = require('./thread-route');

const route = require('express').Router();



route.use('/thread', threadRoute)
route.use('/poentielthread', potentielThreadRoute)
route.use('/farmThread', farmThreadRoute)

module.exports = route;