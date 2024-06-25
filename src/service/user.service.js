"use strict";

class UserService {
    static getAllUser() {
        const dataDemo = [
            {
                id: 1,
                name: 'Nguyen Van A'
            },
            {
                id: 2,
                name: 'Nguyen Van B'
            },
            {
                id: 3,
                name: 'Nguyen Van C'
            }
        ]
        return dataDemo
    }
}
module.exports = UserService