const express = require("express");
const { getAllUsers, addUser, borrowBook, returnBook } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.put("/:id/borrow", borrowBook);
router.put("/:id/return", returnBook);

module.exports = router;
