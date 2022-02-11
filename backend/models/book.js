import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  nameBook: String,
  price: Number,
  author: String,
  category: String,
  publishingHouse: String,
  user: { type: mongoose.Schema.ObjectId, ref: "users" },
  registerDate: { type: Date, default: Date.now },
  bookStatus: Boolean,
  dbStatus: true,
});

const book = mongoose.model("books", bookSchema);
export default { book };