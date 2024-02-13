const express = require('express');
const {
  getSciFiArtifactAndRelated,
  getFranchiseAndRelated,
  updateFranchiseofScifiArtifact,
  updateScifiArtifactsInFranchise,
} = require('../controllers/populated');

const populatedRouter = express.Router();

populatedRouter.get('/scifiartifact/:id', getSciFiArtifactAndRelated);
populatedRouter.get('/franchise/:id', getFranchiseAndRelated);
populatedRouter.put('/franchise/:id', updateScifiArtifactsInFranchise);
populatedRouter.put('/scifiartifact/:id', updateFranchiseofScifiArtifact);

module.exports = populatedRouter;
