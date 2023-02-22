const express = require('express')
const cors = require('cors');
const port = 8080

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
	res?.send("Server is running good!");
});

//Router
const karyawanRouter = require('./routes/karyawan-router');
const jabatanRouter = require('./routes/jabatan-router');
const departmentRouter = require('./routes/department-router');

// HTTP REST API
app.use('/api/karyawan', karyawanRouter)
app.use('/api/jabatan', jabatanRouter)
app.use('/api/department', departmentRouter)


app.listen(port, () => {
    console.log(`Server running on`, port)
})