const Book = require("../models/book");

// List all books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find().populate("authors");
  res.json(books);
};

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("authors");
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
