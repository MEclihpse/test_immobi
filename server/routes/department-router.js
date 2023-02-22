const Department = require("../controllers/department-controller");

const router = require("express").Router();

router.get('/', Department.getAllDepartment)
router.post('/', Department.addDepartment)
router.delete('/:id', Department.deleteDepartment)
router.put('/:id', Department.editDepartment)

module.exports = router;