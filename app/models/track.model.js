const { artist } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Track = sequelize.define("track", {
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
    return Track;
  };
  