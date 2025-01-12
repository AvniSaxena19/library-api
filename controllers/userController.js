const User = require("../models/user");
const Book = require("../models/book");

// List all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find().populate("borrowedBooks");
  res.json(users);
};

// Add a new user
exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Borrow a book
exports.borrowBook = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const book = await Book.findById(req.body.bookId);

    if (!user || !book) return res.status(404).json({ message: "User or Book not found" });

    user.borrowedBooks.push(book._id);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Return a borrowed book
exports.returnBook = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.borrowedBooks = user.borrowedBooks.filter(bookId => bookId.toString() !== req.body.bookId);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
