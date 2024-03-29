const { SciFiArtifact, Franchise } = require('../../src/models/mongo');

const getSciFiArtifactAndRelatedFromDB = async (id) => {
  const sciFiArtifact = await SciFiArtifact.findById(id).populate({
    path: 'franchiseId',
  });
  return sciFiArtifact;
};

const getFranchiseAndRelatedFromDB = async (id) => {
  const franchise = await Franchise.findById(id).populate({
    path: 'artifacts',
  });
  return franchise;
};

const updateScifiArtifactsInFranchiseinDB = async (id, payload) => {
  const franchise = await Franchise.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
    }
  ).populate('artifacts');

  return franchise;
};

const updateFranchiseofScifiArtifactInDB = async (id, payload) => {
  const sciFiArtifact = await SciFiArtifact.findById(id).populate(
    'franchiseId'
  );
  const franchise = await Franchise.findByIdAndUpdate(
    sciFiArtifact.franchiseId.id,
    payload,
    {
      new: true,
    }
  ).populate('artifacts');

  return franchise;
};

module.exports = {
  getSciFiArtifactAndRelatedFromDB,
  getFranchiseAndRelatedFromDB,
  updateFranchiseofScifiArtifactInDB,
  updateScifiArtifactsInFranchiseinDB,
};
