
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
        // We're saying that we want our Author to have Posts
        classMethods: {
          associate: function(models) {
            // An Author (foreignKey) is required or a Post can't be made
            Answer.belongsTo(models.Question, {
              // through: questionAnswer,
              foreignKey: {
                allowNull: false
              }
            });
            Answer.belongsTo(models.User, {
              // through: questionAnswer,
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
