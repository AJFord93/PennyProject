
module.exports = function(sequelize, DataTypes) {

    let Answer = sequelize.define("Answer", {

      answer: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },

    },

      {

        classMethods: {
          associate: function(models) {
            Answer.belongsTo(models.Question, {
              foreignKey: {
                allowNull: false
              }
            });
            Answer.belongsTo(models.User, {
              foreignKey: {
                allowNull: false
              }
            });
          }
        }
      }
    );
    return Answer;
  };
