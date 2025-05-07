const pool = require('../db')
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


class User {
    static async createUser(username, password){
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash

            
        }
    }
}