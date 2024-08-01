const pool = require('./db');

const getFamilles = async () => {
  const res = await pool.query('SELECT * FROM Familles');
  return res.rows;
};

const getFamilleById = async (id) => {
  const res = await pool.query('SELECT * FROM Familles WHERE AFMID = $1', [id]);
  return res.rows[0];
};

const createFamille = async (famille) => {
  const { afmcode, afmintitule } = famille;
  const res = await pool.query(
    'INSERT INTO Familles (AFMCODE, AFMINTITULE) VALUES ($1, $2) RETURNING *',
    [afmcode, afmintitule]
  );
  return res.rows[0];
};

const updateFamille = async (id, famille) => {
  const { afmcode, afmintitule } = famille;
  const res = await pool.query(
    'UPDATE Familles SET AFMCODE = $1, AFMINTITULE = $2 WHERE AFMID = $3 RETURNING *',
    [afmcode, afmintitule, id]
  );
  return res.rows[0];
};

const deleteFamille = async (id) => {
  console.log('id', id);
  await pool.query('DELETE FROM Familles WHERE AFMID = $1', [id]);
};

module.exports = {
  getFamilles,
  getFamilleById,
  createFamille,
  updateFamille,
  deleteFamille,
};
