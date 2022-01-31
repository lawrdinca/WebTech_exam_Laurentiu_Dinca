const {DataTypes} = require("sequelize");
const sequelize  = require( "../sequelize");

const VirtualShelf = sequelize.define("VirtualShelves",{
    ShelfID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    Description: {
        type: DataTypes.STRING,
        validate: {
            len: [3, 255]
        },
        allowNull: false
    },
    CreationDate: {
        type: DataTypes.DATEONLY
    }
})
module.exports = VirtualShelf;