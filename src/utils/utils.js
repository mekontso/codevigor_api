/**
 * Utility file
 */
const jwt = require("jsonwebtoken")

/**
 * create a json response for client
 * @param {String} message data to be send
 * @param {Boolean} error true or false if any error proper request handling
 * @param {Number} status is the request status
 * @returns client response
 */
function jsonResponse(data, error, status) {
    return { data, error, status }
}

/**
 * Check if a password is having min 8 letter, with at least a symbol, upper and lower case letters and a number
 * @param {String} password to validate
 * @returns true if password if valid false if  not
 */
function validatePassword(password) {
    var reGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return reGEX.test(password);
}

/**
 * generate jwt for user
 * @param {User} user 
 * @returns a valid token
 */
async function generateJWT(user) {
    try {
        return jwt.sign(
            { userId: user._id, username: user.username },
            "secret",
            { expiresIn: "1h" }
        )
    } catch (error) {
        console.log("Error generating token" + error.message)
        return null
    }
}

module.exports = {
    jsonResponse,
    validatePassword,
    generateJWT
}