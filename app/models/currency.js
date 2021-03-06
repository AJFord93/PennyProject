
module.exports = function(sequelize, DataTypes) {

    let Currency = sequelize.define("Currency", {

      currency_spent: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      currency_balance: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
    },
    {
      classMethods: {
        associate: function(models) {
          Currency.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }

    });

    return Currency;
  };
