const Book = require("../models/bookModel")


async function createBook(req, res) {
    await Book.create(req.body)
    res.send("Book created ok")
}

async function findAllBooks(req, res) {
    const books = await Book.find()
    res.send(books)
}

async function updateBook(req, res) {
    const book = await Book.findOne({ _id: req.params.id })

    book.author = req.body.author
    book.title = req.body.title

    await book.save(req.body)
    res.send("Book updated ok")
}

async function deleteBook(req, res) {
    await Book.deleteOne({ _id: req.params.id })
    res.send("Book delete ok")
}

module.exports = {
    createBook,
    findAllBooks,
    updateBook,
    deleteBook
}
