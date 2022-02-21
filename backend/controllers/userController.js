import jwt from "jsonwebtoken";
import moment from "moment";
import user from "../models/user.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  const passHash = await bcrypt.hash(req.body.password, 10);
  const userSchema = new user({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.address,
    password: passHash,
    role: req.body.role,
    dbStatus: true,
  });

  const result = await userSchema.save();

  if (!result)
    return result.status(500).send({ menssage: "Failed to register User" });

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          role: result.role,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (error) {
    return res.status(500).send({ menssage: "register error" });
  }
};

const listUser = async (req, res) => {
  let users = await user
    .find({ name: new RegExp(req.params["name"]) })
    .populate("role")
    .exec();
  return user.length === 0
    ? res.status(400).send({ menssage: "No se encontraron Resultados" })
    : res.status(200).send({ users });
};

const login = async (req, res) => {
  const userLogin = await user.findOne({ email: req.body.email });

  if (!userLogin)
    return res.status(400).send({ menssage: "Wron email or password" });

  if (!userLogin.dbStatus)
    return res.status(400).send({ menssage: "user  no Found" });

  const passHash = await bcrypt.compare(req.body.password, userLogin.password);

  if (passHash)
    return res.status(400).send({ menssage: "wron email or password" });

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: userLogin._id,
          name: userLogin.name,
          role: userLogin.role,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (error) {
    return res.status(500).send({ menssage: "register Error" });
  }
};

export default { registerUser, listUser, login };
