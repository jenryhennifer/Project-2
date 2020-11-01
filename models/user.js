var bcryt = requrie('bcryptjs');

module.exports = function(sequelize, DataTypes){
    var User = sequelizze.define('User', {
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
    User.prototype.validPassword = (password => dbcrypt.compareSync(password, this.password));
    User.addHook('beforeCreate', function(user){
        user.password = bcrypt.hashSync(user.password,bycrypt.genSaltSync(10),null);
    });
    return User;
};