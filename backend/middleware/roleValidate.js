import role from "../models/role.js";

const existingRole = async (req, res, next) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete Data" });

  const existRol = await role.findOne({ name: req.body.name });
  if (existRol)
    return res.status(400).send({ menssage: "The Role is already registered" });

  /*return roles.length === 0
    ? res.status(400).send({ menssage: "No se encontraron resultados" })
    : res.status(200).send({ roles });*/
  next();
};

const existRol = async (req, res, next) => {
  const roleId = await role.findOne({ name: "user" });
  if (!roleId)
    return res.status(500).send({ menssage: "No role was assigned" });

  req.body.role = roleId._id;

  next();
};

export default { existingRole, existRol };
