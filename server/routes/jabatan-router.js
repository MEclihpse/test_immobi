const Jabatan = require("../controllers/jabatan-controller");

const router = require("express").Router();

router.get('/', Jabatan.getAllJabatan)
router.post('/', Jabatan.addJabatan)
router.delete('/:id', Jabatan.deleteJabatan)
router.put('/:id', Jabatan.editJabatan)

module.exports = router;