const express = require('express');
const {
  getSciFiArtifactAndRelated,
//   getFranchiseAndRelated,
//   updateSciFiArtifactAndRelated,
//   updateFranchiseAndRelated,
} = require('../controllers/populated');

const populatedRouter = express.Router();

populatedRouter.get('/scifiartifact/:id', getSciFiArtifactAndRelated);
// populatedRouter.get('/franchise/:id', getFranchiseAndRelated);
// populatedRouter.put('/scifiartifact/:id', updateSciFiArtifactAndRelated);
// populatedRouter.put('/franchise/:id', updateFranchiseAndRelated);

module.exports = populatedRouter;