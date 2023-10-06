/**
 * routes of the app are loaded here
 */
const express = require("express")
const bookController = require("../controllers/bookController")
const router = express.Router()

// create book
router.post("/books/create", bookController.createBook)
// get all books
router.get("/books", bookController.findAllBooks)
// update book
router.put("/books/update/:id", bookController.updateBook)
// delete book
router.delete("/books/delete/:id", bookController.deleteBook)

module.exports = router