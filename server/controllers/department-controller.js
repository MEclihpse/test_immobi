const {
    table_department,
} = require('../models');
const response = require('../utils/response');
const {checkParams} = require('../utils/request');

class Department {
    static async getAllDepartment(req, res){
        try {
            const data = await table_department.findAll();
            return response.success(res, data);
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async deleteDepartment(req, res){
        try {
            const fieldCheck = checkParams([req.params.id]);
            if (!fieldCheck) return response.incompleteParams(res);

            const { id } = req.params;
            const data = await table_department.findByPk(id)
            if (!data) return response.notFound(res, 'Department Not Found');

            await table_department.destroy({
                where: {
                    id
                }
            })

            return response.success(res, "Department deleted");
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async addDepartment(req, res){
        try {
            const fieldCheck = checkParams([
                req.body.nama_department
            ]);
            if (!fieldCheck) return response.incompleteParams(res);

            const data = await table_department.create({
                ...req.body
            })
            if (!data) {
                return response.failed(res, 'Failed to add Department');
            }

            return response.success(res, 'Success Add Department');
        } catch (err) {
            return response.failed(res, err);
        }
    }

    static async editDepartment(req, res){
        try {
            const id = +req.params.id;
            if (!id) return response.incompleteParams(res);
            if (!Object.keys(req.body).length) {
              return response.incompleteParams(res);      
            }
            
            const data = await table_department.findByPk(id)
            if (!data) return response.notFound(res, 'Department Not Found')
      
            let input = {
                nama_department: req.body.nama_department ?? data.nama_department,
            };
      
            const updated = await table_department.update(
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
              return response.failed(res, "Failed to edit Department");
            }
      
            return response.success(res, "Department Edited");
          } catch (err) {
            return response.failed(res, err);
          }
    }
}

module.exports = Department