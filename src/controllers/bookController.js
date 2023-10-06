/**
 * handle incomming request for all books
 */
const bookService = require("../services/booksServices")
async function createBook(req, res, next) {
    try {
        res.json(await bookService.createBook(req.body))
    } catch (error) {
        console.log("Error creating book " + error.message)
        next(error)
    }
}

async function findAllBooks(req, res, next) {
    try {
        res.json(await bookService.findAllBooks())
    } catch (error) {
        console.log("Error finding all books " + error.message)
        next(error)
    }
}

async function updateBook(req, res, next) {
    try {
        res.json(await bookService.updateBook(req.body, req.params.id))
    } catch (error) {
        console.log("Error updating book " + error.message)
        next(error)
    }
}

async function deleteBook(req, res, next) {
    // try {
    //     res.json(await bookService.deleteBook(req.params.id))
    // } catch (error) {
    //     console.log("Error deleting book " + error.message)
    //     next(error)
    // }
}

module.exports = {
    createBook,
    findAllBooks,
    updateBook,
    deleteBook
}
