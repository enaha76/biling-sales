const express = require('express');
const router = express.Router();
const familleController = require('../controllers/familleController');

router.get('/', familleController.getAllFamilles);
router.get('/:id', familleController.getFamilleById);
router.post('/', familleController.createFamille);
router.put('/:id', familleController.updateFamille);
router.delete('/:id', familleController.deleteFamille);

module.exports = router;
