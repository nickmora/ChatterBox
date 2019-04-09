module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define("Chat", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        photo: DataTypes.STRING,
    });
    return Chat
}