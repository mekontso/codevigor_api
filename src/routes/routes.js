/**
 * routes of the app are loaded here
 */
const express = require("express")
const bookController = require("../controllers/bookController")
const userController = require("../controllers/userController")
const authMiddleware = require("../middleware/auth")
const router = express.Router()
/**************
 * Routes Book
 *************/
// create book
router.post("/books/create", bookController.createBook)
// get all books
router.get("/books", bookController.findAllBooks)
// update book
router.put("/books/update/:id", bookController.updateBook)
// delete book
router.delete("/books/delete/:id", bookController.deleteBook)


/**************
 * Routes User
 *************/
// create user
router.post("/user/create", userController.createUser)
// login user
router.post("/user/login", userController.loginUser)
module.exports = router