/*
 * Title: Route
 * Description: Applications Routes
 * Author: Abu Jafor Mohammad Saleh
 * Date: 18/04/2022
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
