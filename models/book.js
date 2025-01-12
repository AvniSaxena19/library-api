const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  price: Number,
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }],
  genres: [String],
  publicationYear: Number,
});

module.exports = mongoose.model("Book", bookSchema);
