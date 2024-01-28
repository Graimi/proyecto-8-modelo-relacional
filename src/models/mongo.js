const mongoose = require('mongoose');

const emptySchema = new mongoose.Schema({});

const SciFiArtifact = mongoose.model('SciFiArtifact', emptySchema);

module.exports = { SciFiArtifact };