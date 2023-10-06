const jwt = require("jsonwebtoken")
const utils = require("../utils/utils")
/**
 * middleware to authenticate user for each  request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function authenticateJWT(req, res, next) {
    // skip the login and register routes
    if (req.path === "/api/v1/user/login" || req.path === "/api/v1/user/create") {
        return next()
    }
    // check if any auth header
    const authHeader = req.headers['authorization']
    if (!authHeader) {
        return res.status(401).json(utils.jsonResponse("Token not provided", true, 401))
    }
    // get token from header
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(401).json(utils.jsonResponse("Token not provided", true, 401))
    }

    jwt.verify(token, "secret", (error, user) => {
        if (error) {
            return res.status(401).json(utils.jsonResponse("Invalid token", true, 403))
        }
        req.user = user
        next()
    })

}

module.exports = {
    authenticateJWT
}