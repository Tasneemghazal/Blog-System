import userModel from "../../../DB/models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await userModel.findAll();
    return res.json({ message: "user", users });
  } catch (err) {
    return res.json({ message: "error", err });
  }
};
export const destroy = async (req, res) => {
  const {id} = req.params;
  const deleteUser= await userModel.destroy({where: {id}});
  if(deleteUser==0){
      return res.status(404).json({ message: "user not found",deleteUser});
  }
  return res.json({ message: "success" });
}

export const update = async (req, res) => {
  try {
      const { id } = req.params;
      const { name } = req.body;
      const [updateCount] = await userModel.update({ name }, { where: { id } });
      if (updateCount==0) {
          return res.status(404).json({ message: "User not found"});
      }
      return res.json({ message: "Success"});
  } catch (error) {
      return res.status(500).json({ message: "Error", error: error.message });
  }
}

