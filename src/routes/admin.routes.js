const express = require('express');
const schemas = require('../utils/validationSchema');
const authenticate = require('../middlewares/authenticate');
const adminController = require('../controllers/admin.controller.js');
const userController = require('../controllers/user.controller.js');
const requestValidator = require('../middlewares/requestValidator');

const router = new express.Router();

router.post('/create-user', authenticate, requestValidator(schemas.user), adminController.createUser);
router.get('/food-entries', authenticate, adminController.fetchFoodEntries);
router.post('/food-entry', authenticate, requestValidator(schemas.foodEntry), userController.createFoodEntry);
router.get('/food-entry/:id', authenticate, userController.readFoodEntry);
router.put('/food-entry', authenticate, requestValidator(schemas.foodEntry), userController.updateFoodEntry);
router.delete('/food-entry/:id', authenticate, userController.deleteFoodEntry);
router.get('/report', authenticate, userController.getReport);

module.exports = router;
