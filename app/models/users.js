module.exports = function(sequelize, DataTypes) {

  let User = sequelize.define("User", {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    firstname: {
        type: DataTypes.STRING,
        notEmpty: true
    },

    lastname: {
        type: DataTypes.STRING,
        notEmpty: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
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
      allowNull: false,
      len: [1, 20]
    }
},
    {

      classMethods: {
        associate: function(models) {
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
