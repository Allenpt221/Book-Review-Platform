import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/databse.js';
import bookRouter from './routers/book.router.js';
dotenv.config();
const app = express();
app.use(express.json());


const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server is ready!");   
})

app.use("/api/book", bookRouter);



app.listen(PORT, () => {
    console.log(`Server running on PORT: http://localhost:${PORT}`);
    connectDB();
});