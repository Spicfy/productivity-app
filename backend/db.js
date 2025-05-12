const Pool = require("pg").Pool;

require('dotenv').config();

const pool = new Pool({
    user: "postgres",
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
})