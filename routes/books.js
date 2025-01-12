const express = require("express");
const { getAllBooks, addBook, getBookById } = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:id", getBookById);

module.exports = router;
