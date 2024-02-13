const {
  getSciFiArtifactAndRelatedFromDB,
  getFranchiseAndRelatedFromDB,
  updateFranchiseofScifiArtifactInDB,
  updateScifiArtifactsInFranchiseinDB,
} = require('../repositories/populated');

const getSciFiArtifactAndRelated = async (req, res, next) => {
  const { id } = req.params;
  const sciFiArtifactAndRelated = await getSciFiArtifactAndRelatedFromDB(id);
  res.status(200).json({ data: sciFiArtifactAndRelated });
};

const getFranchiseAndRelated = async (req, res, next) => {
  const { id } = req.params;
  const franchiseAndRelated = await getFranchiseAndRelatedFromDB(id);
  res.status(200).json({ data: franchiseAndRelated });
};

const updateScifiArtifactsInFranchise = async (req, res, next) => {
  const { id } = req.params;
  const franchiseUpdated = await updateScifiArtifactsInFranchiseinDB(id, req.body);
  res.status(200).json({ data: franchiseUpdated });
};

const updateFranchiseofScifiArtifact = async (req, res, next) => {
  const { id } = req.params;
  const scifiArtifactsUpdated = await updateFranchiseofScifiArtifactInDB(id, req.body)
  res.status(200).json({ data: scifiArtifactsUpdated });
};

module.exports = {
  getSciFiArtifactAndRelated,
  getFranchiseAndRelated,
  updateFranchiseofScifiArtifact,
  updateScifiArtifactsInFranchise,
};
