const mongoose = require('mongoose');

const emptySchema = new mongoose.Schema({});

const SciFiArtifact = mongoose.model('SciFiArtifact', emptySchema);
const Franchise = mongoose.model('Franchise', emptySchema);

module.exports = { SciFiArtifact, Franchise };