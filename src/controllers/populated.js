const {
  getSciFiArtifactAndRelatedFromDB,
  //   getFranchiseAndRelatedFromDB,
  //   updateSciFiArtifactAndRelatedInDB,
  //   updateFranchiseAndRelatedInDB,
} = require('../repositories/populated');

const getSciFiArtifactAndRelated = async (req, res, next) => {
    const { id } = req.params;
    const sciFiArtifactAndRelated = await getSciFiArtifactAndRelatedFromDB(id);
    const response = {
        _id: sciFiArtifactAndRelated._id,
        name: sciFiArtifactAndRelated.name,
        description: sciFiArtifactAndRelated.description,
        type: sciFiArtifactAndRelated.type,
        powers: sciFiArtifactAndRelated.powers,
        franchise: {
          _id: sciFiArtifactAndRelated.franchiseId._id,
          name: sciFiArtifactAndRelated.franchiseId.name,
          genre: sciFiArtifactAndRelated.franchiseId.genre,
          establishedYear: sciFiArtifactAndRelated.franchiseId.establishedYear,
          artifacts: sciFiArtifactAndRelated.franchiseId.artifacts
        },
      };
      res.status(200).json({ data: response });
  };

module.exports = {
  getSciFiArtifactAndRelated,
  //   getFranchiseAndRelated,
  //   updateSciFiArtifactAndRelated,
  //   updateFranchiseAndRelated,
};
