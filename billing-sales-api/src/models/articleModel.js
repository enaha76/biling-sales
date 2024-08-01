const pool = require('./db');

const getArticles = async () => {
  const res = await pool.query('SELECT * FROM articles');
  return res.rows;
};

const getArticleById = async (id) => {
  const res = await pool.query('SELECT * FROM articles WHERE artid = $1', [id]);
  return res.rows[0];
};

const createArticle = async (article) => {
  const { artcode, afmid, artdesignation, artsousfamille, artcategorie, artnature, artcollection, artprixv } = article;
  const res = await pool.query(
    'INSERT INTO articles (artcode, afmid, artdesignation, artsousfamille, artcategorie, artnature, artcollection, artprixv) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [artcode, afmid, artdesignation, artsousfamille, artcategorie, artnature, artcollection, artprixv]
  );
  return res.rows[0];
};

const updateArticle = async (id, article) => {
  const { artcode, afmid, artdesignation, artsousfamille, artcategorie, artnature, artcollection, artprixv } = article;
  const res = await pool.query(
    'UPDATE articles SET artcode = $1, afmid = $2, artdesignation = $3, artsousfamille = $4, artcategorie = $5, artnature = $6, artcollection = $7, artprixv = $8 WHERE artid = $9 RETURNING *',
    [artcode, afmid, artdesignation, artsousfamille, artcategorie, artnature, artcollection, artprixv, id]
  );
  return res.rows[0];
};

const deleteArticle = async (id) => {
  await pool.query('DELETE FROM articles WHERE artid = $1', [id]);
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
