/*
 * Title: Route
 * Description: Applications Routes
 * Author: Abu Jafor Mohammad Saleh
 * Date: 18/04/2022
 */

// dependenties
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
