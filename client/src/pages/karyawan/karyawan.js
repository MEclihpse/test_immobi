import { useEffect, useState } from "react";
// import {  useLocation, Outlet } from "react-router-dom"
import DataTable from "../../components/Table/DataTable";
import axios from "axios"

export default function Karyawan() {
const [data, setData] = useState([])
const urlApi = `http://localhost:8080/api/`

async function fetchKaryawan() {
    try {
        const response = await axios.get(
          `${urlApi}karyawan`,
        );
        setData(response.data.response)
      } catch (err) {
        console.error(err);
      }
}


useEffect(()=>{
    fetchKaryawan()
}, [])

    return (
        <>
            <DataTable
            data={data}
            fetch={fetchKaryawan}
            />
        </>
    )
}