const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        photo: DataTypes.STRING,
    });

    User.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password)
    }

    User.beforeCreate(user => {
        user.password = bcrypt.hashSync(user.password,bcrypt.genSaltSync(10),null);
    });

    return User
}