require("dotenv").config();

const { Pool } = require("pg")
const database = process.env.PGDATABASE;

const connectionString = `postgresql://postgres:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`

const pool = new Pool({
    connectionString: connectionString,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    end: () => pool.end(),
}