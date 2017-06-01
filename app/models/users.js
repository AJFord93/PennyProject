module.exports = function(sequelize, DataTypes) {

  let User = sequelize.define("User", {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    fbID: {
        type: DataTypes.STRING,
        allowNull: true

    },

    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
        validate:{
          isEmail: true
        }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1, 20]
    }
},
    {

      classMethods: {
        associate: function(models) {
          User.hasMany(models.Question, {
            foreignKey: {
              allowNull: true
            }
          });
          User.hasMany(models.Answer, {
            foreignKey: {
              allowNull: true
            }
          });
        }
      }



  });
  return User;
};
