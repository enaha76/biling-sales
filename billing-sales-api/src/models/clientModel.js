const pool = require('./db');

const getClients = async () => {
  const res = await pool.query('SELECT * FROM Clients');
  return res.rows;
};

const getClientById = async (id) => {
  const res = await pool.query('SELECT * FROM Clients WHERE tirid = $1', [id]);
  return res.rows[0];
};

const createClient = async (client) => {
  const { tircode, tirsociete, tircategorie, tirbranche, adrl1, adrcodepostal, adrville, adrpays } = client;
  const res = await pool.query(
    'INSERT INTO Clients (tircode, tirsociete, tircategorie, tirbranche, adrl1, adrcodepostal, adrville, adrpays) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [tircode, tirsociete, tircategorie, tirbranche, adrl1, adrcodepostal, adrville, adrpays]
  );
  return res.rows[0];
};

const updateClient = async (id, client) => {
  const { tircode, tirsociete, tircategorie, tirbranche, adrl1, adrcodepostal, adrville, adrpays } = client;
  const res = await pool.query(
    'UPDATE Clients SET tircode = $1, tirsociete = $2, tircategorie = $3, tirbranche = $4, adrl1 = $5, adrcodepostal = $6, adrville = $7, adrpays = $8 WHERE tirid = $9 RETURNING *',
    [tircode, tirsociete, tircategorie, tirbranche, adrl1, adrcodepostal, adrville, adrpays, id]
  );
  return res.rows[0];
};

const deleteClient = async (id) => {
  await pool.query('DELETE FROM Clients WHERE tirid = $1', [id]);
};

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
