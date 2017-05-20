module.exports = function(sequelize, DataTypes) {

  let User = sequelize.define("User", {

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 16]
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 20]
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false
    },
    questions_answered: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    questions_asked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currency_balance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    currency_spent: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          User.hasMany(models.Question, {
            foreignKey: {
              allowNull: false
            }
          });
          User.hasMany(models.Answer, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }



  });
  return User;
};
