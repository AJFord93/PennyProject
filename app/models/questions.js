
module.exports = function(sequelize, DataTypes) {

    let Question = sequelize.define("Question", {

      question: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },

    },

      {
        // We're saying that we want our Author to have Posts
        classMethods: {
          associate: function(models) {
            // An Author (foreignKey) is required or a Post can't be made
            Question.hasOne(models.Answer, {
              foreignKey: {
                allowNull: false
              }
            });
            Question.belongsTo(models.User, {
              foreignKey: {
                allowNull: false
              }
            });
          }
        }
      }
    );
    return Question;
  };

// one to many relationship

//  questiod id => answer id
// questions and answers belong to users
