import Book from '../model/book.sever.js';
import mongoose from 'mongoose';


export const Create = async (req, res) => {
    const {title, author, ratings, comment} = req.body;

    try{
        if(!title || !author){
            res.status(400).json({success: false, message: "required to fill"});
        }

        const existingBook = await Book.findOne({title});

        if(existingBook){
            return res.status(403).json({success: false, message: "Already in the Book list"});
        }
        const newBook =  new Book({title, author, ratings, comment});
        newBook.save();
        res.status(201).json({success: true, message: "Book added successfully."});
    } catch (error){
        console.error("Error", error);
        res.status(500).json({success: false, message: "Service not unvailable"});
        
    }
};

export const updateBook = async (req, res) =>{
     const { id } = req.params;
     const {title, author, ratings, comment} = req.body;
     
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid product ID"});
    }
     try{
        const updateBooks = await Book.findByIdAndUpdate(id, 
            {title, author, ratings, comment},
            {new: true}
        );   
        


        if (!updateBooks) {
            return res.status(404).json({ success: false, message: "Book not found" });
        };    
        res.status(200).json({success: true, data: updateBooks}); 
    } catch (error){
        console.error("Error", error);
        res.status(500).json({success: false, message: "Service not unvailable"});
    }
};

export const Delete = async (req, res) => {
    const { id } = req.params;

    try{
        await Book.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
        
    } catch (error){
        console.error("Error", error);
        res.status(500).json({success: false, message: "Service unvailable"});
    }
};

export const showAll = async (req, res) => {
    try{
    const Books = await Book.find({});
    res.status(200).json({success: true, data: Books});
    } catch(error){
        res.status(500).json({success: false, message: "Server Error"});
    }
}