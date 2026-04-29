const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// ADD product
router.post("/", (req, res) => {
  const { name, quantity, price } = req.body;
  const sql = "INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)";
  db.query(sql, [name, quantity, price], (err, result) => {
    if (err) throw err;
    res.send("Product Added");
  });
});

// UPDATE product
router.put("/:id", (req, res) => {
  const { quantity } = req.body;
  const sql = "UPDATE products SET quantity=? WHERE id=?";
  db.query(sql, [quantity, req.params.id], (err) => {
    if (err) throw err;
    res.send("Updated");
  });
});

// DELETE product
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM products WHERE id=?", [req.params.id], (err) => {
    if (err) throw err;
    res.send("Deleted");
  });
});

module.exports = router;
