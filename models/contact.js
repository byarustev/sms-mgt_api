'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    Contact.hasMany(models.SMS, {
      foreignKey:'receiver_id',
      as:'received_messages'
    });

    Contact.hasMany(models.SMS, {
          foreignKey:'sender_id',
          as:'sent_messages'
    })
  };
  return Contact;
};
