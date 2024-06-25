// controller
"use strict";

const UserService = require("../service/user.service");

class UserController {
    static async getAllUser(req, res) {
        const data = UserService.getAllUser()
        res.status(200).json(data)
    }
}
module.exports = UserController