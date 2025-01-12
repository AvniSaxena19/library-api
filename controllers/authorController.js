const Author = require("../models/author");

// List all authors
exports.getAllAuthors = async (req, res) => {
  const authors = await Author.find().populate("books");
  res.json(authors);
};

// Add a new author
exports.addAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get author by ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate("books");
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
