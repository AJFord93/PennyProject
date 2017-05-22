
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
      },
      {
        classMethods: {
          associate: function(models){
            Category.hasMany(models.Question, {
              foreignKey: {
                allowNull: false
              }
            });
          }
        }
    });
    return Category;
  };
