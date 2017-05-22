
module.exports = function(sequelize, DataTypes) {

    let Profile = sequelize.define("Profile", {

    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1, 16]
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1]
    }
  },
    {
      classMethods: {
        associate: function(models) {
          Profile.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }

    });

    return Profile;
  };
