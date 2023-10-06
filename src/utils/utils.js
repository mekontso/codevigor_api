/**
 * Utility file
 */


/**
 * create a json response for client
 * @param {*} message data to be send
 * @param {*} error true or false if any error proper request handling
 * @param {*} status is the request status
 * @returns client response
 */
function jsonResponse(data, error, status) {
    return { data, error, status }
}

module.exports = {
    jsonResponse
}