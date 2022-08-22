const express = require("express");
const router = express.Router();

const { 
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook

} = require("../controllers/bookRoutesController");

//GET all books
router.get("/", getBooks);

//GET book from id
router.get("/:id",getBook);

// POST new book
router.post("/", createBook);

// Delete book
router.delete("/:id", deleteBook);

//Update book
router.patch("/:id", updateBook);

module.exports = router;
