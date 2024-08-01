require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connection successful:', res.rows[0]);
    const rese = await pool.query('SELECT * FROM Familles');
    console.log("data",rese.rows);
  } catch (err) {
    console.error('Connection error:', err.message);
  } finally {
    await pool.end();
  }
}



testConnection();
