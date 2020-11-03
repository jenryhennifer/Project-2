var bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  User.prototype.validPassword = function (password) {
    bcrypt.compareSync(password, this.password);
  };

  User.addHook('beforeCreate', function (user) {
    console.log(user);
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
  return User;
};
