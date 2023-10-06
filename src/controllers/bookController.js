/**
 * controller for handling incomming client request for all books
 */
const bookService = require("../services/booksServices")
/**
 * handle book creation request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function createBook(req, res, next) {
    const jsonResponse = await bookService.createBook(req.body)
    res.status(jsonResponse.status).json(jsonResponse)
}
/**
 * handle book search request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function findAllBooks(req, res, next) {
    const jsonResponse = await bookService.findAllBooks()
    res.status(jsonResponse.status).json(jsonResponse)
}
/**
 * handle book update request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function updateBook(req, res, next) {
    const jsonResponse = await bookService.updateBook(req.body, req.params.id)
    res.status(jsonResponse.status).json(jsonResponse)
}
/**
 * handle book delete request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function deleteBook(req, res, next) {
    const jsonResponse = await bookService.deleteBook(req.params.id)
    res.status(jsonResponse.status).json(jsonResponse)
}

module.exports = {
    createBook,
    findAllBooks,
    updateBook,
    deleteBook
}
