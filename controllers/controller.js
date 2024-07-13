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
};

exports.updatePassword = (req, res) => {
  const { id, password, newPassword } = req.body;
  const query = "SELECT * FROM users WHERE id = ? AND password = ?";
  db.query(query, [id, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    }
    const updateQuery = "UPDATE users SET password = ? WHERE id = ?";
    db.query(updateQuery, [newPassword, id], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(200).json({ message: "Password updated successfully!" });
      console.log("Password updated successfully!");
    });
  });
};

exports.addIncome = (req, res) => {
  const { userId, amount, source, date } = req.body;
  const query =
    "INSERT INTO income (user_id, amount, source, date) VALUES (?, ?, ?, ?)";
  db.query(query, [userId, amount, source, date], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Income added successfully!" });
    console.log("Income added successfully!");
  });
};

exports.addExpense = (req, res) => {
  const { userId, amount, category, date } = req.body;
  const query =
    "INSERT INTO expenses (user_id, amount, category, date) VALUES (?, ?, ?, ?)";
  db.query(query, [userId, amount, category, date], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Expense added successfully!" });
  });
};

exports.addBudget = (req, res) => {
  const { userId, category, amount, month, year } = req.body;
  const query =
    "INSERT INTO budgets (user_id, category, amount, month, year) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [userId, category, amount, month, year], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Budget added successfully!" });
  });
};

exports.getReport = (req, res) => {
  const { userId, month, year } = req.query;
  const incomeQuery =
    "SELECT SUM(amount) AS totalIncome FROM income WHERE user_id = ? AND MONTH(date) = ? AND YEAR(date) = ?";
  const expenseQuery =
    "SELECT SUM(amount) AS totalExpense FROM expenses WHERE user_id = ? AND MONTH(date) = ? AND YEAR(date) = ?";
  const budgetQuery =
    "SELECT category, amount FROM budgets WHERE user_id = ? AND month = ? AND year = ?";

  db.query(incomeQuery, [userId, month, year], (err, incomeResult) => {
    if (err) return res.status(500).json({ error: err });

    db.query(expenseQuery, [userId, month, year], (err, expenseResult) => {
      if (err) return res.status(500).json({ error: err });

      db.query(budgetQuery, [userId, month, year], (err, budgetResult) => {
        if (err) return res.status(500).json({ error: err });

        res.status(200).json({
          totalIncome: incomeResult[0].totalIncome,
          totalExpense: expenseResult[0].totalExpense,
          budgets: budgetResult,
        });
      });
    });
  });
};
