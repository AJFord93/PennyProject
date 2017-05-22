
module.exports = function(sequelize, DataTypes) {

    let Category = sequelize.define("Category", {

      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1]
      }

    });

    return Category;
  };
