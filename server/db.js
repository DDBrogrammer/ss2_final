
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "dai24032001",
    host: "localhost",
    port: 5432,
    database: "ss2_todo"
});

module.exports = pool;
