const Joi = require('joi');

const user = Joi.object()
  .keys({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(3).required().email(),
    password: Joi.string().min(8).max(16).required(),
    calorieLimit: Joi.number().min(0).required(),
  })
  .required()
  .unknown(true);

const foodEntry = Joi.object()
  .keys({
    userId: Joi.number().required(),
    foodItem: Joi.string().min(2).max(50).required(),
    time: Joi.string().required(),
    calorieCount: Joi.number().min(0).required(),
  })
  .required()
  .unknown(true);

const updateCalorieLimit = Joi.object()
  .keys({
    userId: Joi.number().required(),
    calorieLimit: Joi.number().min(0).required(),
  })
  .required()
  .unknown(true);

module.exports = {
  user,
  foodEntry,
  updateCalorieLimit,
};
