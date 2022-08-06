'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  calorie.init(
    {
      userId: DataTypes.INTEGER,
      foodItem: DataTypes.STRING,
      time: DataTypes.DATE,
      calorieCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'calorie',
    },
  );
  return calorie;
};
