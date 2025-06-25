'use strict';
const {
  Model
} = require('sequelize');
const router = require('../routes/user');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.User, {as: 'owner', foreignKey: 'ownerId' });
      Project.hasMany(models.Task, { foreignKey: 'projectId' });
    }
  }
  Project.init({
    name: DataTypes.STRING,
    ownerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};