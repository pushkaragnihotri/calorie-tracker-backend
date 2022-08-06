const moment = require('moment');
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const userService = require('../services/user.service');
const calorieService = require('../services/calorie.service');

async function createFoodEntry(req, res) {
  try {
    await calorieService.create(req.body);

    res.success('Food entry created successfully.', { success: true });
  } catch (error) {
    res.error(error.message);
  }
}

async function readFoodEntry(req, res) {
  try {
    const foodEntry = await calorieService.getOne({
      where: {
        id: req.params.id,
      },
    });

    res.success('Food entry read successfully.', foodEntry);
  } catch (error) {
    res.error(error.message);
  }
}

async function updateFoodEntry(req, res) {
  try {
    await calorieService.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    res.success('Food entry updated successfully.', { success: true });
  } catch (error) {
    res.error(error.message);
  }
}

async function deleteFoodEntry(req, res) {
  try {
    await calorieService.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.success('Food entry deleted successfully.', { success: true });
  } catch (error) {
    res.error(error.message);
  }
}

async function fetchFoodEntries(req, res) {
  try {
    const foodEntries = await calorieService.getAll({
      where: {
        userId: req.params.userId,
      },
    });

    res.success('Food entries fetched successfully.', foodEntries);
  } catch (error) {
    res.error(error.message);
  }
}

async function updateCalorieLimit(req, res) {
  try {
    await userService.update(req.body, {
      where: {
        id: req.body.userId,
      },
    });

    res.success('Calorie Limit Updated successfully.', { success: true });
  } catch (error) {
    res.error(error.message);
  }
}

async function getReport(req, res) {
  const current = moment(Date.now()).utc().add(1, 'days').format('YYYY-MM-DD');
  const currentMinus7Days = moment(current).add(-6, 'days').format('YYYY-MM-DD');
  const currentMinus14Days = moment(current).add(-14, 'days').format('YYYY-MM-DD');

  try {
    const entriesAddedThisWeek = await calorieService.getOne({
      where: {
        time: {
          [Op.between]: [currentMinus7Days, current],
        },
      },
      attributes: [[sequelize.fn('COUNT', sequelize.col('userId')), 'count']],
    });

    const entriesAddedPreviousWeek = await calorieService.getOne({
      where: {
        time: {
          [Op.between]: [currentMinus14Days, currentMinus7Days],
        },
      },
      attributes: [[sequelize.fn('COUNT', sequelize.col('userId')), 'count']],
    });

    const avgCaloriesPerUserThisWeek = await calorieService.getAll({
      where: {
        time: {
          [Op.between]: [currentMinus7Days, current],
        },
      },
      attributes: ['userId', [sequelize.fn('AVG', sequelize.col('calorieCount')), 'avgCalories']],
      group: ['userId'],
      order: ['userId'],
    });

    res.success('Food entry read successfully.', {
      entriesAddedThisWeek: entriesAddedThisWeek.dataValues.count,
      entriesAddedPreviousWeek: entriesAddedPreviousWeek.dataValues.count,
      avgCaloriesPerUserThisWeek,
    });
  } catch (error) {
    res.error(error.message);
  }
}

module.exports = {
  createFoodEntry,
  readFoodEntry,
  updateFoodEntry,
  deleteFoodEntry,
  fetchFoodEntries,
  updateCalorieLimit,
  getReport,
};
