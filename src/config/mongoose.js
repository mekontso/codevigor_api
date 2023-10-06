/**
 * Configuration file for database access
 */

/**
 * Connect to database
 */
function connect() {
    const mongoose = require("mongoose")
    const dbURL = "mongodb://127.0.0.1:27017/codevigor"

    try {
        mongoose.connect(dbURL)
        mongoose.connection.once("open", () => console.log("Success DB Connect"))
        // handle error after connexion is ok
        mongoose.connection.on("error", error => console.log(error))
    } catch (error) {
        console.log("Error connect to database")
        console.log(error)
    }
}

module.exports = connect