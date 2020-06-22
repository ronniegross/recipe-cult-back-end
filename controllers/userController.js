const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const userList = await userService.getAllUsers();
    res.send(userList);
  } catch (e) {
    res.send(e.message);
  }
});

// Get one user
router.get('/:id', async (req, res) => {
  // try {
  //   const userList = await userService.getAllUsers();
  //   res.send(userList);
  // } catch (e) {
  //   res.send(e.message);
  // }
});


// Create user
router.post('/', async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.send(`user ${user._id} created successfully.`);
  } catch (e) {
    res.send(e.message);
  }
})

module.exports = router;