module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  });

  Category.associate = function (models) {
    Category.hasMany(models.Whim, {
      onDelete: 'cascade',
    });
  };

  return Category;
};
