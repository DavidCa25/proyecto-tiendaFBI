const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "root", 
  database: "tienda"
});

db.connect(err => {
  if (err) {
    console.error("Error conectando a la base de datos: ", err);
  } else {
    console.log("Conectado a la base de datos MySQL");
  }
});

const tables = ["clientes", "proveedores", "ventas", "empleados", "compras", "inventarios"];

tables.forEach(table => {
  app.get(`/${table}`, (req, res) => {
    db.query(`SELECT * FROM ${table}`, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  });

  app.post(`/${table}`, (req, res) => {
    const fields = Object.keys(req.body).join(", ");
    const values = Object.values(req.body);
    const placeholders = values.map(() => "?").join(", ");
    db.query(`INSERT INTO ${table} (${fields}) VALUES (${placeholders})`, values, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ id: results.insertId, ...req.body });
    });
  });

  app.put(`/${table}/:id`, (req, res) => {
    const updates = Object.keys(req.body).map(field => `${field} = ?`).join(", ");
    const values = [...Object.values(req.body), req.params.id];
    db.query(`UPDATE ${table} SET ${updates} WHERE id = ?`, values, (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: `${table} actualizado` });
    });
  });

  app.delete(`/${table}/:id`, (req, res) => {
    db.query(`DELETE FROM ${table} WHERE id = ?`, [req.params.id], (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: `${table} eliminado` });
    });
  });
});

app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001");
});
