const {
    table_jabatan,
} = require('../models');
const response = require('../utils/response');
const {checkParams} = require('../utils/request');

class Jabatan {
    static async getAllJabatan(req, res){
        try {
            const data = await table_jabatan.findAll();
            return response.success(res, data);
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async deleteJabatan(req, res){
        try {
            const fieldCheck = checkParams([req.params.id]);
            if (!fieldCheck) return response.incompleteParams(res);

            const { id } = req.params;
            const data = await table_jabatan.findByPk(id)
            if (!data) return response.notFound(res, 'Jabatan Not Found');

            await table_jabatan.destroy({
                where: {
                    id
                }
            })

            return response.success(res, "Jabatan deleted");
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async addJabatan(req, res){
        try {
            console.log(req.body);
            const fieldCheck = checkParams([
                req.body.id_department,
                req.body.nama_jabatan
            ]);
            if (!fieldCheck) return response.incompleteParams(res);

            const data = await table_jabatan.create({
                ...req.body
            })
            if (!data) {
                return response.failed(res, 'Failed to add Jabatan');
            }

            return response.success(res, 'Success Add Jabatan');
        } catch (err) {
            console.log("🚀 ~ file: jabatan-controller.js:56 ~ Jabatan ~ addJabatan ~ err:", err)
            return response.failed(res, err);
        }
    }

    static async editJabatan(req, res){
        try {
            const id = +req.params.id;
            if (!id) return response.incompleteParams(res);
            if (!Object.keys(req.body).length) {
              return response.incompleteParams(res);      
            }
            
            const data = await table_jabatan.findByPk(id)
            if (!data) return response.notFound(res, 'Jabatan Not Found')
      
            let input = {
                id_department: req.body.id_department ?? data.id_department,
                nama_jabatan: req.body.nama_jabatan ?? data.nama_jabatan,
            };
      
            const updated = await table_jabatan.update(
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
              return response.failed(res, "Failed to edit Jabatan");
            }
      
            return response.success(res, "Jabatan Edited");
          } catch (err) {
            return response.failed(res, err);
          }
    }
}

module.exports = Jabatan