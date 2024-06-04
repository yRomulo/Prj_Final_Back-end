const express = require ("express");
const routes = require("./routes");

const migrationsRun = require("./database/sqlite/migrations")

const app = express();
app.use(express.json()) ;

app.use(routes);
migrationsRun();

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`));