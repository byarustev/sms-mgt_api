'use strict';
module.exports = (sequelize, DataTypes) => {
  const SMS = sequelize.define('SMS', {
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER,
    message: DataTypes.STRING,
    sms_status: DataTypes.STRING
  }, {});
  SMS.associate = function(models) {
    SMS.belongsTo(models.Contact,{
      foreignKey:'sender_id',
        as:'sender'
    });

    SMS.belongsTo(models.Contact,{
          foreignKey:'receiver_id',
          as:'receiver'
    });
  };
  return SMS;
};
