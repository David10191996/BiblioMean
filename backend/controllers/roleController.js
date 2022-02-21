import role from "../models/role.js";

const registerRole = async (req, res) => {
  
  const schema = new role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  let result = await schema.save();

  if (!result)
    return res.status(500).send({ message: "Fail to register role" });

  res.status(200).send({ result });
};

const listRol = async (req, res) => {
  let roles = await role.find();

  return roles.length === 0
    ? res.status(400).send({ menssage: "No se encontraron resultados" })
    : res.status(200).send({ roles });

  /**
   *  return users.length === 0
    ? res.status(400).send({ mensagge: "No se encontraron resultados" })
    : res.status(200).send({ users });
   */
};

export default { registerRole, listRol };
