const express = require('express');
const {
  getAllSciFiArtifacts,
  getSciFiArtifactsById,
  createSciFiArtifacts,
  updateSciFiArtifactById,
  deleteSciFiArtifact,
} = require('../controllers/sciFiArtifacts');

const router = express.Router();

router.get('/', getAllSciFiArtifacts);
router.get('/:id', getSciFiArtifactsById);
router.post('/', createSciFiArtifacts);
router.put('/:id', updateSciFiArtifactById);
router.delete('/:id', deleteSciFiArtifact);

module.exports = router;
