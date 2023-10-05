const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Success install express js")
})


app.listen(port, () => {
    console.log("Express server started at port : " + port)
})