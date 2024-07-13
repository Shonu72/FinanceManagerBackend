const db = require("../config/db");

exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const query = "INSERT INTO users (username,email, password) VALUES (?,?, ?)";
  db.query(query, [username, email, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "User registered successfully!" });
    console.log("User registered successfully!");
  });
};


exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ message: "User logged in successfully!" });
    console.log("User logged in successfully!");
  });
}

