const Famille = require('../models/familleModel');

const getAllFamilles = async (req, res) => {
  try {
    const familles = await Famille.getFamilles();
    res.json(familles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFamilleById = async (req, res) => {
  try {
    const famille = await Famille.getFamilleById(req.params.id);
    res.json(famille);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFamille = async (req, res) => {
  try {
    const newFamille = await Famille.createFamille(req.body);
    res.status(201).json(newFamille);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFamille = async (req, res) => {
  try {
    const updatedFamille = await Famille.updateFamille(req.params.id, req.body);
    res.json(updatedFamille);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFamille = async (req, res) => {
  try {
    await Famille.deleteFamille(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFamilles,
  getFamilleById,
  createFamille,
  updateFamille,
  deleteFamille,
};
