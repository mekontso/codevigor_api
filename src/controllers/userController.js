/**
 * controller for handling user requests
 */

const userService = require("../services/userServices")

/**
 * handle request for creating a user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function createUser(req, res, next) {
    const jsonResponse = await userService.createUser(req.body)
    res.status(jsonResponse.status).json(jsonResponse)
}
/**
 * handle request for logging in the user by username and password
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function loginUser(req, res, next) {
    const jsonResponse = await userService.loginUser(req.body)
    res.status(jsonResponse.status).json(jsonResponse)
}


module.exports = {
    createUser,
    loginUser
}