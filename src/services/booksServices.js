const Book = require("../models/bookModel")


async function createBook(book) {
    await Book.create(book)
    return { "message": "Success create book", "error": false }
}

async function findAllBooks() {
    return await Book.find()
}

async function updateBook(bookData, id) {
    const book = await Book.findOne({ _id: id })

    book.author = bookData.author
    book.title = bookData.title

    await book.save(book)
    return { "message": "Success update book", "error": false }
}

async function deleteBook(id) {
    await Book.deleteOne({ _id: id })
    return { "message": "Success delete book", "error": false }
}

module.exports = {
    createBook,
    findAllBooks,
    updateBook,
    deleteBook
}
