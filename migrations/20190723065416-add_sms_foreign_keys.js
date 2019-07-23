'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let migrations =[];
    migrations.push(queryInterface.addColumn(
            'Sms', //name of source model
            'receiver_id', //name of key we are adding
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Contacts', //name of target table
                    key:'id',
                },
                onUpdate:'CASCADE',
                onDelete:'SET NULL',
            }
        )
    );

    migrations.push(queryInterface.addColumn(
          'Sms', //name of source model
          'sender_id', //name of key we are adding
          {
              type: Sequelize.INTEGER,
              references: {
                  model: 'Contacts', //name of target table
                  key:'id',
              },
              onUpdate:'CASCADE',
              onDelete:'SET NULL',
          }
          )
    );

    return Promise.all(migrations);
  },

  down: (queryInterface, Sequelize) => {
      let migrations =[];
       migrations.push(queryInterface.removeColumn(
          'Sms', //name of source model
          'sender_id' //key we want to remove
      ));

      migrations.push(queryInterface.removeColumn(
          'Sms', //name of source model
          'receiver_id' //key we want to remove
      ));

      return Promise.all(migrations);
  }
};
