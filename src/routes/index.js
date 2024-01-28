const express = require('express');
const sciFiArtifactsRouter = require('./sciFiArtifacts');

const router = express.Router();

router.use('/sciFiArtifacts', sciFiArtifactsRouter);

module.exports = router;
