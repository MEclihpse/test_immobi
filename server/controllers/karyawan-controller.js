const {
    table_karyawan,
    table_jabatan,
    table_department
} = require('../models');
const response = require('../utils/response');
const {checkParams} = require('../utils/request');

class Karyawan {
    static async getAllKaryawan(req, res){
        try {
            const data = await table_karyawan.findAll();
            return response.success(res, data);
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async getKaryawanDetail(req, res){
        try {
            const fieldCheck = checkParams([req.params.id]);
            if (!fieldCheck) {
              return response.incompleteParams(res);
            }
            const { id } = req.params;
            const data = await table_karyawan.findByPk(id, {
              include: [{
                model: table_jabatan,
                include: table_department
            }]
            })
            return response.success(res, data);
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async deleteKaryawan(req, res){
        try {
            const fieldCheck = checkParams([req.params.id]);
            if (!fieldCheck) return response.incompleteParams(res);

            const { id } = req.params;
            const data = await table_karyawan.findByPk(id)
            if (!data) return response.notFound(res, 'Karyawan Not Found');

            await table_karyawan.destroy({
                where: {
                    id
                }
            })

            return response.success(res, "Karyawan deleted");
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async addKaryawan(req, res){
        try {
            const fieldCheck = checkParams([
                req.body.name,
                req.body.id_jabatan,
                req.body.age,
                req.body.gender,
                req.body.tanggal_lahir,
                req.body.alamat
            ]);
            if (!fieldCheck) return response.incompleteParams(res);

            const data = await table_karyawan.create({
                ...req.body
            })
            if (!data) {
                return response.failed(res, 'Failed to add Karyawan');
            }

            return response.success(res, 'Success Add Karyawan');
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async editKaryawan(req, res){
        try {
            console.log(req.body.tanggal_lahir, "<<<<<<<<<<");
            const id = +req.params.id;
            if (!id) return response.incompleteParams(res);
            if (!Object.keys(req.body).length) {
              return response.incompleteParams(res);      
            }
            
            const data = await table_karyawan.findByPk(id)
            if (!data) return response.notFound(res, 'Karyawan Not Found')
      
            let input = {
                name: req.body.name ?? data.name,
                jabatan: req.body.id_jabatan ?? data.id_jabatan,
                age: req.body.age ?? data.age,
                gender: req.body.gender ?? data.gender,
                tanggal_lahir: req.body.tanggal_lahir ?? data.tanggal_lahir,
                alamat: req.body.alamat ?? data.alamat
            };
            console.log(input.tanggal_lahir, "<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>.");
            const updated = await table_karyawan.update(
              {
                ...input,
              },
              {
                where: {
                  id,
                },
              }
            );
            if (!updated) {
              return response.failed(res, "Failed to edit Karyawan");
            }
      
            return response.success(res, "Karyawan Edited");
          } catch (err) {
            console.log("🚀 ~ file: karyawan-controller.js:120 ~ Karyawan ~ editKaryawan ~ err:", err)
            return response.failed(res, err);
          }
    }
}

module.exports = Karyawan