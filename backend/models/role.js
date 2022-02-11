import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: String,
  decription: String,
  registerDate: { type: Date, default: Date.now }, 
  dbStatus: true,
});

const role = mongoose.model("roles", roleSchema); 
export default {role};