
module.exports = function(sequelize, DataTypes) {

    let Question = sequelize.define("Question", {

      question: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Question.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });

          Question.hasOne(models.Category, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }

    });

    return Question;
  };
