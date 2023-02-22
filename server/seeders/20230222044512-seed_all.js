'use strict';

const karyawan = require('../data/db.json').karyawan
const jabatan = require('../data/db.json').jabatan
const department = require('../data/db.json').department

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    karyawan.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
      el.tanggal_lahir = new Date(el.tanggal_lahir)
    })
    jabatan.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })
    department.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('table_departments', department, {})
    await queryInterface.bulkInsert('table_jabatans', jabatan, {})
    await queryInterface.bulkInsert('table_karyawans', karyawan, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('table_departments', null, {})
    await queryInterface.bulkDelete('table_jabatans', null, {})
    await queryInterface.bulkDelete('table_karyawans', null, {})
  }
};
