const pool = require('./db');

const getFactures = async () => {
  const res = await pool.query('SELECT * FROM Invoices');
  return res.rows;
};

const getFactureById = async (id) => {
  const res = await pool.query('SELECT * FROM Invoices WHERE pcvid = $1', [id]);
  return res.rows[0];
};

const createFacture = async (facture) => {
  const { pcvnum, tirid, pcvdateeffet, pcvmntttc } = facture;
  const res = await pool.query(
    'INSERT INTO Invoices (pcvnum, tirid, pcvdateeffet, pcvmntttc) VALUES ($1, $2, $3, $4) RETURNING *',
    [pcvnum, tirid, pcvdateeffet, pcvmntttc]
  );
  return res.rows[0];
};

const updateFacture = async (id, facture) => {
  const { pcvnum, tirid, pcvdateeffet, pcvmntttc } = facture;
  const res = await pool.query(
    'UPDATE Invoices SET pcvnum = $1, tirid = $2, pcvdateeffet = $3, pcvmntttc = $4 WHERE pcvid = $5 RETURNING *',
    [pcvnum, tirid, pcvdateeffet, pcvmntttc, id]
  );
  return res.rows[0];
};

const deleteFacture = async (id) => {
  await pool.query('DELETE FROM Invoices WHERE pcvid = $1', [id]);
};

module.exports = {
  getFactures,
  getFactureById,
  createFacture,
  updateFacture,
  deleteFacture,
};
