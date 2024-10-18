const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController')

// route for creating users
router.route('/createAccount')
.post(userController.userRegistration)

router.route('/login')
.post(userController.userLogin)


module.exports = router
