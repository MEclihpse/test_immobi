'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      table_karyawan.belongsTo(models.table_jabatan, {foreignKey: "id_jabatan"})
    }
  }
  table_karyawan.init({
    name: DataTypes.STRING,
    id_jabatan: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM('L', 'P'),
    tanggal_lahir: DataTypes.STRING(12),
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'table_karyawan',
  });
  return table_karyawan;
};