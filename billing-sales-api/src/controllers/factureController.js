const Facture = require('../models/factureModel');

const getAllFactures = async (req, res) => {
  try {
    const factures = await Facture.getFactures();
    res.json(factures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFactureById = async (req, res) => {
  try {
    const facture = await Facture.getFactureById(req.params.id);
    res.json(facture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFacture = async (req, res) => {
  try {
    const newFacture = await Facture.createFacture(req.body);
    res.status(201).json(newFacture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFacture = async (req, res) => {
  try {
    const updatedFacture = await Facture.updateFacture(req.params.id, req.body);
    res.json(updatedFacture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFacture = async (req, res) => {
  try {
    await Facture.deleteFacture(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFactures,
  getFactureById,
  createFacture,
  updateFacture,
  deleteFacture,
};
