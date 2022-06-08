const express = require("express");
const app = express();
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: ""
})
app.get('/', (req, resu) => {
"INSERT INTO ( name, cost, category) VALUES ('Far Cry 5', '120', 'Ação"
});

app.listen(3001, () => {
    console.log("rodando servidor");
});