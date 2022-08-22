const mongoose = require('mongoose')
const bookdb = require('../models/BooksModel')


//GET all books
const getBooks = async(req,res)=>{
    const response = await bookdb.find({}).sort({createdAt:-1})
    res.status(200).json(response);
}


//POST add new book
const createBook = async (req, res)=>{
    const {title, author, description, year} = req.body;

    try {
    const book = await bookdb.create({title, author, description, year})
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({error:error.toString()})
    }
    
}


//GET/:id View book record
const getBook = async(req, res)=>{
    
    const {id}= req.params

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     res.status(404).json({error:`Not valid id`})
    // }

    try {
        
        const book = await bookdb.findById({_id:id})

        res.status(200).json(book)
        
    } catch (error) {
        res.status(404).json({error:`ID does not exists`})
    }

}


//PACTH /:id Update book record
const updateBook = async(req, res)=>{
    const {id}= req.params

     if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:`Not valid id`})
    }
    const book = await bookdb.findByIdAndUpdate({_id:id},{...req.body})

    res.status(201).json(book)

}

//DELETE /:id Delete book record
const deleteBook = async(req, res)=>{
    const {id} = req.params;
    try {
        const book = await bookdb.findByIdAndDelete({_id:id})
        res.status(200).json({message: `Book of ID: ${id} deleted`})
    } catch (error) {
        res.status(400).json({error:error.toString()})
    }

}

module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
}