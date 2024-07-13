// CREATE DATABASE finance_tracker;
// USE finance_tracker;

// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL
// );

// CREATE TABLE income (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT,
//     amount DECIMAL(10, 2),
//     source VARCHAR(255),
//     date DATE,
//     FOREIGN KEY (user_id) REFERENCES users(id)
// );

// CREATE TABLE expenses (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT,
//     amount DECIMAL(10, 2),
//     category VARCHAR(255),
//     date DATE,
//     FOREIGN KEY (user_id) REFERENCES users(id)
// );

// CREATE TABLE budgets (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT,
//     category VARCHAR(255),
//     amount DECIMAL(10, 2),
//     month INT,
//     year INT,
//     FOREIGN KEY (user_id) REFERENCES users(id)
// );
