const mongoose = require('mongoose');
const User = mongoose.model('User');

const getAllUsers = async () => {
  return await User.find();
};

const createUser = async (requestBody) => {
  const user = new User(requestBody);
  const savedUser = await user.save();
  return savedUser
};

module.exports = {
  getAllUsers,
  createUser
}