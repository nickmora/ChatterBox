module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("Message", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        photo: DataTypes.STRING,
    });
    return Message
}