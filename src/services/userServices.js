/**
 * Business logic for users
 */

const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const utils = require("../utils/utils")

/**
 * create a new user in the database
 * @param {User} user 
 * @returns 
 */
async function createUser(user) {
    try {
        // validate password
        if (utils.validatePassword(user.password)) {
            // hashpassword and save in database
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
            // save user database
            user = await User.create(user)
            // generate token
            const token = await utils.generateJWT(user)
            if (token != null) {
                return utils.jsonResponse({ "message": "Success creating new user", "userId": user._id, "username": user.username, token }, false, 201)
            } else {
                return utils.jsonResponse("Success creating new user please login", false, 201)
            }

        } else {
            return utils.jsonResponse("Password should be min 8 letters, with at least a symbol, upper and lower case letters and a number", true, 400)
        }
    } catch (error) {
        return utils.jsonResponse("Error creating user " + error, true, 500)
    }
}

/**
 * find user by username
 * @param {User} username 
 * @returns 
 */
async function findUserByUsername(username) {
    try {
        return await User.findOne({ username })
    } catch (error) {
        return null
    }
}
async function loginUser(user) {
    // find user by username
    const userDatabase = await findUserByUsername(user.username)
    if (userDatabase == null) {
        return utils.jsonResponse("Username or password incorrect " + user.username + " found", false, 200)
    }
    // authenticate user 
    const auth = await bcrypt.compare(user.password, userDatabase.password)
    if (!auth) {
        return utils.jsonResponse("Username or password incorrect ", false, 200)
    }
    // generate token
    const token = await utils.generateJWT(user)
    if (token != null) {
        return utils.jsonResponse({ "userId": userDatabase._id, "username": userDatabase.username, token }, false, 200)
    } else {
        return utils.jsonResponse("Could not generate token", true, 500)
    }
}
module.exports = {
    createUser,
    loginUser
}