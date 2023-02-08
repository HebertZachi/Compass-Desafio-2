const express = require('express');
const UserController = require('../Controllers/UserController');

const router = express.Router();

router
  .route('/users/signUp')
  .post(UserController.createUser);

router
  .route('/users/signIn')
  .post(UserController.Login);

router
  .route('/users')
  .get(UserController.getAllUsers)

router
  .route('/user/:id')
  .get(UserController.getUserById)
  .patch(UserController.updateUserByID)
  .delete(UserController.deleteUserById);

module.exports = router;


