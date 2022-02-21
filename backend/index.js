import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import roleRoutes from "./routes/roleRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.use("/api/role", roleRoutes);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: ", process.env.PORT)
);

db.dbConnection();

/*
lo ultimo que hice fue terminar el registro y validar de ROl, falta verificar que el rol que se cree no este ya registrado

*/
