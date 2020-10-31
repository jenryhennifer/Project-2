module.exports = function(sequelize, DataTypes) {
  var Whim = sequelize.define("Whim", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
  });

  Whim.associate = function(models) {
    Whim.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
    Whim.hasMany(models.Comment,{
      onDelete: 'cascade'
    })
  };

  return Whim;
};
