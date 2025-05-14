

const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
// User Model (simplified)


// User Controller
const userController = {
    register: async (req, res) => {
        try {
            const { username, password, email } = req.body;
            
            // Validation
            if (!username || !password || !email) {
                return res.status(400).json({ message: "All fields are required" });
            }
            
            // Check if user already exists
            const existingUser = await User.getUserByUsername(username);
            if (existingUser) {
                return res.status(400).json({ message: "Username already exists" });
            }
            
            // Create the user
            const newUser = await User.createUser(username, password, email);
            
            // Remove password from response
            const userResponse = {...newUser};
            delete userResponse.password;
            
            res.status(201).json(userResponse);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            
            // Validation
            if (!username || !password) {
                return res.status(400).json({ message: "Username and password are required" });
            }
            
            // Authenticate user
            const user = await User.authenticate(username, password);
            
            // Generate JWT token
            const token = jwt.sign(
                { id: user.id, username: user.username },
                process.env.JWT_SECRET || 'your_jwt_secret',
                { expiresIn: '1h' }
            );
            
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    },
    
    getProfile: async (req, res) => {
        try {
            const userId = req.user.id; // Assuming middleware sets req.user
            const user = await User.getUserById(userId);
            
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            
            // Remove password from response
            const userResponse = {...user};
            delete userResponse.password;
            
            res.status(200).json(userResponse);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    logout: async (req, res) => {
        try{
            return res.status(200).json({message: "Logout successful. Please delete token on the client side."})
        }catch(error){
            req.status(500).json({message: error.message})
        }
    },
    
    updateProfile: async (req, res) => {
        try {
            const userId = req.user.id; // Assuming middleware sets req.user
            const { email } = req.body;
            
            // Update user
            const result = await pool.query(
                "UPDATE users SET email = $1 WHERE id = $2 RETURNING *",
                [email, userId]
            );
            
            if (result.rows.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }
            
            // Remove password from response
            const userResponse = {...result.rows[0]};
            delete userResponse.password;
            
            res.status(200).json(userResponse);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    deleteAccount: async (req, res) => {
        try {
            const userId = req.user.id; // Assuming middleware sets req.user
            
            // Delete user
            const result = await pool.query(
                "DELETE FROM users WHERE id = $1 RETURNING *",
                [userId]
            );
            
            if (result.rows.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }
            
            res.status(200).json({ message: "Account deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = userController;