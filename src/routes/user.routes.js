const express = require('express');
const schemas = require('../utils/validationSchema');
const users = require('../controllers/user.controller.js');
const requestValidator = require('../middlewares/requestValidator');

const router = new express.Router();

router.post('/food-entry', requestValidator(schemas.foodEntry), users.createFoodEntry);
router.get('/:userId/food-entry', users.fetchFoodEntries);
router.patch('/update-calorie-limit', requestValidator(schemas.updateCalorieLimit), users.updateCalorieLimit);

module.exports = router;
