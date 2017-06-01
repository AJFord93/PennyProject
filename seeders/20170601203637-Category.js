'use strict';

var Category = require('../models')['Category'];

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Category', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				unique: true,
				type: Sequelize.INTEGER
			},
			type: {
				allowNull: false,
				type: Sequelize.STRING
			},
			description: {
				allowNull: false,
				type: Sequelize.TEXT
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		}).then(function() {
      Category.bulkCreate([{
          type: "Love",
          description: "What is love? Baby don't hurt me!"
        }, {
          type: "Life",
          description: "Someone please let me know the meaning of life."
        }, {
          type: "Family",
          description: "Blood is thicker than liquor, wait.. that's not how it goes..."
        }, {
          type: "Home",
          description: "Home is where the heart is -- down the street at the local pub."
        }, {
          type: "Sports",
          description: "Balls and Things."
        }, {
          type: "Politics",
          description: "The thing you've banned from your Facebook timeline."
        }, {
          type: "Fashion",
          description: "C'mon Vogue!"
        }
        }])
      });
	},

	down: function(queryInterface) {
		return queryInterface.dropTable('Category');
	}

};
