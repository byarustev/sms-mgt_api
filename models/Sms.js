'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sms = sequelize.define('Sms', {
    message: DataTypes.STRING,
    sms_status: DataTypes.STRING
  }, {});

  Sms.associate = function(models) {
    Sms.belongsTo(models.Contact,{
      foreignKey:'sender_id',
        as:'sender'
    });

    Sms.belongsTo(models.Contact,{
          foreignKey:'receiver_id',
          as:'receiver'
    });
  };
  return Sms;
};
