const express = require('express');
const sciFiArtifactsRouter = require('./sciFiArtifacts');
const franchisesRouter = require('./franchises');

const router = express.Router();

router.use('/scifiartifacts', sciFiArtifactsRouter);
router.use('/franchises', franchisesRouter);

module.exports = router;
