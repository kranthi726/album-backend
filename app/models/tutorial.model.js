module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("album", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    artist: {
      type: Sequelize.STRING
    },
  });
  return Tutorial;
};
