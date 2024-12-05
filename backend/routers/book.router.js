import express from 'express';
import { Create, Delete, showAll, updateBook } from '../controller/book.controller.js';

const route = express.Router();

route.post("/", Create);
route.delete("/:id", Delete);
route.put("/:id", updateBook);
route.get("/", showAll);

export default route;