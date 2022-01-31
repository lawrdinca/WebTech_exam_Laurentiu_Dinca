const {DataTypes} = require("sequelize");
const sequelize  = require( "../sequelize");

const Book = sequelize.define("Books",{
    BookID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    ShelfID:{
        type: DataTypes.INTEGER,
        references:{model:'VirtualShelves', key:'ShelfID'},
        allowNull:true
    },
    Title: {
        type: DataTypes.STRING,
        validate: {
            len: [5, 255]
        },
        allowNull: false
    },
    Genre: {
        type: DataTypes.ENUM("Comedy", "Drama", "Tragedy", "Romance", "Adventure")
    },
    Url:{
        type:DataTypes.STRING,
        allowNull:false,
        isUrl:true
    }
})
module.exports = Book;