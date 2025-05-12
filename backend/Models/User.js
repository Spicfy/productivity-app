const pool = require('../db')
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


class User {
    static async createUser(username, password, email){
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash

            const result = await pool.query(
                "INSERT INTO user(username, password, email) VALUES($1, $2, $3) RETURNING *"
                [username, hashedPassword, email]

            );
            return results.rows[0]
        }catch(e){
            throw new Error(error.message)
        }
    }

    static async getUserById(id){
        try{
            const res = await pool.query(
                "SELECT * FROM user WHERE id = $1",
                [id]
            )
            return res.rows[0];
        }catch(e){
            throw new Error(e.message)
        }
    }
    static async getUserByUsername(username){
        try{
            const res = pool.query(
                "SELECT * FROM user WHERE username = $1",
                [username]
            )
            return res.rows[0];
        }catch(e){
            throw new Error(e.message)
        }
    }
    static async authenticate(username, password){
        try{
        
        }
    }
}

