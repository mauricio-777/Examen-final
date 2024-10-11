const User = require("../model/User");

async function getUser(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

async function createUser(req, res) {
  try {
    const user = req.body;
    const temp = await User.create(user);
    res.json(temp);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUser,
  createUser,
};
