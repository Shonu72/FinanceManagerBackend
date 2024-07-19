const express = require("express");
const {
  registerUser,
  loginUser,
  addIncome,
  addExpense,
  addBudget,
  getReport,
  updatePassword,
} = require("../controllers/controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/updatePassword", updatePassword);
router.post("/addIncome", addIncome);
router.post("/addExpense", addExpense);
router.post("/addBudget", addBudget);
router.get("/getReport", getReport);

module.exports = router;
