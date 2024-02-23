import userModel from "../../../DB/models/user.model.js";



export const register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await userModel.create({ email, password, name });
    return res.json({ message: "success", user });
  } catch (error) {
    if (error?.original?.errno == 1062) {
      return res.json({ message: "email already in use" });
    }
    return res.json({ message: "error", error: error.stack });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await userModel.findOne({
    attributes: ["id", "name"],
    where: { email, password },
  });

  if (!checkUser.length) {
    return res.json({ message: "email or password not found" });
  }
  return res.json({ message: "success" });
};


