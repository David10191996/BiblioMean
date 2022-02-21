import book from "../models/book.js";

/*  nameBook: String,
  price: Number,
  author: String,
  category: String,
  publishingHouse: String, */

const registerBook = async (req, res) => {
  const bookSchema = new book({
    name: req.body.name,
    author: req.body.author,
    category: req.body.category,
    publishingHouse: req.body.publishingHouse,
    bookStatus: true,
    dbStatus: true,
  });

  const result = await bookSchema.save();

  return !result
    ? res.status(500).send({ menssage: "Failed to Register user" })
    : res.status(200).send({ menssage: result });
};

const listBook = async (req, res) => {
  let books = await book
    .find({ name: new RegExp(req.params["name"]) })
    
    return users.length === 0
    ? res.status(400).send({ menssage: "No se encontraron resultados" })
    : res.status(200).send({ users });

};

const updateBook = async (req, res) => {};

const deleteBook = async (req, res) => {
  if (!req.params["_id"])
    return res.status(400).send({ menssage: "Incomplete Data" });

  const books = await book.findByIdAndDelete(req.params["_id"]); //buscamos por ID y luego lo elimino

  return !books
    ? res.status(400).send({ menssage: "Error delete Book" }) // si no encuentra el id
    : res.status(200).send({ menssage: "Book Delete!" }); // muestro el usuario eliminado
};

const assignBook = async (req, res) => {};

export default { registerBook, listBook, updateBook, deleteBook, assignBook };
