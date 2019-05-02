const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
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