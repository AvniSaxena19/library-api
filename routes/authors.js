const express = require("express");
const { getAllAuthors, addAuthor, getAuthorById } = require("../controllers/authorController");

const router = express.Router();

router.get("/", getAllAuthors);
router.post("/", addAuthor);
router.get("/:id", getAuthorById);

module.exports = router;
