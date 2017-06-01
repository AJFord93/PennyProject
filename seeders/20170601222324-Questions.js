'use strict';

module.exports = {

	up: function(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Questions', [{
        question: "How do you impeach Trump?",
        createdAt: Sequelize.fn('NOW'),
			  updatedAt: Sequelize.fn('NOW'),
        categoryId: 6,
        userId: 1
      }])
	},

	down: function(queryInterface) {
		return queryInterface.bulkDelete('Questions', null, {});
	}
};
