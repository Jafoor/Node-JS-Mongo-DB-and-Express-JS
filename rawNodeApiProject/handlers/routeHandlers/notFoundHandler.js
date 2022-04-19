/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Abu Jafor Mohammad Saleh
 * Date: 18/04/2022
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
