'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Categories', [{
        type: "Love",
        description: "What is love? Baby don't hurt me!",
        createdAt: Sequelize.fn('NOW'),
			  updatedAt: Sequelize.fn('NOW')
      }, {
        type: "Life",
        description: "Someone please let me know the meaning of life.",
        createdAt: Sequelize.fn('NOW'),
			  updatedAt: Sequelize.fn('NOW')
      }, {
        type: "Family",
        description: "Blood is thicker than liquor, wait.. that's not how it goes...",
        createdAt: Sequelize.fn('NOW'),
			  updatedAt: Sequelize.fn('NOW')
      }, {
        type: "Home",
        description: "Home is where the heart is -- down the street at the local pub.",
        createdAt: Sequelize.fn('NOW'),
			  updatedAt: Sequelize.fn('NOW')
      }, {
        type: "Sports",
        description: "Balls and Things.",
        createdAt: Sequelize.fn('NOW'),
			  updatedAt: Sequelize.fn('NOW')
      }, {
        type: "Politics",
        description: "The thing you've banned from your Facebook timeline.",
        createdAt: Sequelize.fn('NOW'),
			  updatedAt: Sequelize.fn('NOW')
      }, {
        type: "Fashion",
        description: "C'mon Vogue!",
        createdAt: Sequelize.fn('NOW'),
			  updatedAt: Sequelize.fn('NOW')
      }])
	},

	down: function(queryInterface) {
		return queryInterface.bulkDelete('Categories', null, {});
	}
};
