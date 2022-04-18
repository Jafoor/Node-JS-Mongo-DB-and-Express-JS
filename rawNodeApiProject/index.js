/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Abu Jafor Mohammad Saleh
 * Date: 18/04/2022
 */

// Dependenties
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
// App Object - module scaffolding
const app = {};

// Configuration
app.config = {
    port: 3000,
};

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

app.handleReqRes = handleReqRes;

// Start the Server
app.createServer();
