import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    comment:{
        type: String
    }
},{
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

export default Book;