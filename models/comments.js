module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Comment.associate = function (models) {
    Comment.belongsTo(models.Whim, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Comment;
};
