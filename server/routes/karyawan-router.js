const Karyawan = require("../controllers/karyawan-controller");

const router = require("express").Router();

router.get('/', Karyawan.getAllKaryawan)
router.post('/', Karyawan.addKaryawan)
router.get('/:id', Karyawan.getKaryawanDetail)
router.delete('/:id', Karyawan.deleteKaryawan)
router.put('/:id', Karyawan.editKaryawan)

module.exports = router;