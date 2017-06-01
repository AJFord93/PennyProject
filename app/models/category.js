
module.exports = function(sequelize, DataTypes) {

    let Category = sequelize.define("Category", {

      type: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1]
      }
      },
      {
        classMethods: {
          associate: function(models){
            Category.hasMany(models.Question, {
              foreignKey: {
                allowNull: false
              }
            });
          }
        }
      });
    // }).then(function(){
    //   Category.bulkCreate([{
    //     type: "Love",
    //     description: "What is love? Baby don't hurt me!"
    //   }, {
    //     type: "Life",
    //     description: "Someone please let me know the meaning of life."
    //   }, {
    //     type: "Family",
    //     description: "Blood is thicker than liquor, wait.. that's not how it goes..."
    //   }, {
    //     type: "Home",
    //     description: "Home is where the heart is -- down the street at the local pub."
    //   }, {
    //     type: "Sports",
    //     description: "Balls and Things."
    //   }, {
    //     type: "Politics",
    //     description: "The thing you've banned from your Facebook timeline."
    //   }, {
    //     type: "Fashion",
    //     description: "C'mon Vogue!"
    //   }
    //   }])
    // });
    return Category;
  };
