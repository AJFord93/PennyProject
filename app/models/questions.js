
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
          // An Author (foreignKey) is required or a Post can't be made
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

// one to many relationship

//  questiod id => answer id
// questions and answers belong to users
