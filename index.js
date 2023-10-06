/**
 * main file to start up server
 */
const express = require("express")
const routes = require("./src/routes/routes")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 3000
const mongooseConnect = require("./src/config/mongoose")

// configure body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api/v1", routes)
// configure cors
app.use(cors())
// default link
app.get("/", (req, res) => {
    res.send("App running")
})
mongooseConnect()
app.listen(port, () => {
    console.log("Express server started at port : " + port)
})