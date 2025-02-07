// Backend: routes/user.js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const { query } = require("../db"); // Import the database connection

const router = express.Router();

// Generate JWT_SECRET and JWT_EXPIRATION_TIME and save them to .env if not already set
if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRATION_TIME) {
	const crypto = require("crypto");

	// Generate random JWT_SECRET
	const randomSecret = crypto.randomBytes(64).toString("hex");
	const expirationTime = "3h"; // Set a default expiration time if not present

	const envPath = path.join(__dirname, "..", ".env");

	// Append JWT_SECRET and JWT_EXPIRATION_TIME to the .env file
	const envData = `JWT_SECRET=${randomSecret}\nJWT_EXPIRATION_TIME=${expirationTime}\n`;

	fs.appendFileSync(envPath, envData);

	// Update runtime environment variables
	process.env.JWT_SECRET = randomSecret;
	process.env.JWT_EXPIRATION_TIME = expirationTime;
}

// JWT secret key and expiration time
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;


router.post("/", async (req, res) => {
    const { email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

	try {
        // Check if the email exists in the database
        const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
        const users = await query(checkEmailQuery, [email]);
    
        // If no user is found with the provided email
        if (!Array.isArray(users) || users.length === 0) {
            return res
                .status(400)
                .json({ message: "Invalid email." });
        }
        // Get the user from the database
        const user = users[0];
    
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        // If the password is invalid
        if (!isPasswordValid) {
            return res
                .status(400)
                .json({ message: "Invalid password." });
        }
    
        // Generate a JWT token
        const token = jwt.sign({ email: user.email }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION_TIME,
        });

        // Remove sensitive data before sending response
        delete user.password; 
    
        // Return success response with the token
        return res
            .status(200)
            .json({
                success: true,
                message: "Login successful.",
                token,
                user
            });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;