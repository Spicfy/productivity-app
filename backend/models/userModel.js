const pool = require('../db')
const bcrypt = require('bcrypt')

class User {
    static async createUser(username, password, email) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const result = await pool.query(
                "INSERT INTO \"user\" (username, password, email) VALUES($1, $2, $3) RETURNING *",
                [username, hashedPassword, email]
            );
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getUserById(id) {
        try {
            const result = await pool.query(
                "SELECT * FROM \"user\" WHERE id = $1",
                [id]
            );
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async getUserByUsername(username) {
        try {
            const result = await pool.query(
                "SELECT * FROM \"user\" WHERE username = $1",
                [username]
            );
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async authenticate(username, password) {
        try {
            const user = await this.getUserByUsername(username);
            if (!user) {
                throw new Error("User not found");
            }
            
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                throw new Error("Invalid password");
            }
            
            const authenticatedUser = {...user};
            delete authenticatedUser.password;
            return authenticatedUser;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = User;