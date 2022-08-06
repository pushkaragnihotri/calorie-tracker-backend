const userService = require('../services/user.service');
const calorieService = require('../services/calorie.service');

async function createUser(req, res) {
  try {
    await userService.create(req.body);

    res.success('Food entry created successfully.', { success: true });
  } catch (error) {
    res.error(error.message);
  }
}

async function fetchFoodEntries(req, res) {
  try {
    const foodEntries = await calorieService.getAll();

    res.success('Food entries fetched successfully.', foodEntries);
  } catch (error) {
    res.error(error.message);
  }
}

module.exports = { createUser, fetchFoodEntries };
