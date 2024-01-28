const { SciFiArtifact, Franchise } = require('../../src/models/mongo');

const getSciFiArtifactAndRelatedFromDB = async (id) => {
  const sciFiArtifact = await SciFiArtifact.findById(id).populate({
    path: 'franchiseId',
    select: 'name genre establishedYear artifacts',
  });
  return sciFiArtifact;
};

module.exports = {
  getSciFiArtifactAndRelatedFromDB,
  //   getFranchiseAndRelatedFromDB,
  //   updateSciFiArtifactAndRelatedInDB,
  //   updateFranchiseAndRelatedInDB,
};
