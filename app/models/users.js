module.exports = function(sequelize, DataTypes) {

  let User = sequelize.define("User", {

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 20]
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
