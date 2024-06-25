
const express = require('express');
const asyncHandler = require('../middlewares/asyncHandle');
const UserController = require('../controllers/user.controller');
const router = express.Router();

// router
router.get('/users', asyncHandler(UserController.getAllUser))
module.exports = router