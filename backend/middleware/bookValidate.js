import book from "../models/book.js";

const validateBook = async (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.author ||
    !req.body.category ||
    !req.body.publishingHouse
  )
    return res.status(400).send({ menssage: "Incomplete data of the Book" });

  const existingBook = await book.findOne({
    name: req.body.name,
    author: req.body.author,
  });
  if (existingBook)
    return res.status(400).send({ menssage: "The Book is Already exist" });

  next();
};



export default { validateBook };

/*  nameBook: String,
  price: Number,
  author: String,
  category: String,
  publishingHouse: String, */
