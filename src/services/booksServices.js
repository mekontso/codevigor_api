const Book = require("../models/bookModel")
const utils = require("../utils/utils")

/**
 * create a new book in database
 * @param {Book} book 
 * @returns informations of the new created book
 */
async function createBook(book) {
    try {
        return utils.jsonResponse(await Book.create(book), false, 201)
    } catch (error) {
        return utils.jsonResponse("Error creating book " + error.message, true, 500)
    }
}
/**
 * find books from database
 * @returns list of books
 */
async function findAllBooks() {
    try {
        return utils.jsonResponse(await Book.find(), false, 200)
    } catch (error) {
        return utils.jsonResponse("Error finding books " + error.message, true, 500)
    }

}
/**
 * update a book with id 
 * @param {Book} bookData new informations of the book
 * @param {String} id of the book to be updated
 * @returns 
 */
async function updateBook(bookData, id) {
    try {
        const book = await Book.findOne({ _id: id })
        if (book) {
            book.author = bookData.author
            book.title = bookData.title

            await book.save(book)
            return utils.jsonResponse("Success update book with id " + id, false, 200);
        } else {
            return utils.jsonResponse("No book with id " + id + " found in database", true, 404)
        }

    } catch (error) {
        return utils.jsonResponse("Error updating book " + error.message, true, 500)
    }
}
/**
 * delete a book by the id
 * @param {String} id of book to be deleted
 * @returns 
 */
async function deleteBook(id) {
    try {
        const book = await Book.findOne({ _id: id })
        if (book) {
            await Book.deleteOne({ _id: id })
            return utils.jsonResponse("Success delete book with id " + id, false, 200);
        } else {
            return utils.jsonResponse("No book with id " + id + " found in database", true, 404)
        }

    } catch (error) {
        return utils.jsonResponse("Error deleting book " + error.message, true, 500)
    }

}

module.exports = {
    createBook,
    findAllBooks,
    updateBook,
    deleteBook
}
