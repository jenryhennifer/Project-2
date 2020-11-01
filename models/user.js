<<<<<<< HEAD
var bcrypt = require('bcryptjs');
=======
var bcryt = require('bcryptjs');
>>>>>>> 48bad4d8dd034abd4203e2ce7f37f02479c009e5

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });
    User.prototype.validPassword = (password => bcrypt.compareSync(password, this.password));
    User.addHook('beforeCreate', function(user){
        user.password = bcrypt.hashSync(user.password,bcrypt.genSaltSync(10),null);
    });
    return User;
};