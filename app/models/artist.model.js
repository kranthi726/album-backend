module.exports = (sequelize, Sequelize) => {
    const Artist = sequelize.define("artist", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Artist;
  };
  