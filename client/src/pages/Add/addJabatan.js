import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddJabatan() {
    const [department, setDepartment] = useState([])
    const urlApi = `http://localhost:8080/api/`
    const navigate = useNavigate();

    const [inputVal, setInputVal] = useState({
        nama_jabatan: "",
        id_department: null
    });
    const handleChange = (e) => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        setInputVal({ ...inputVal, [name]: value, });
    };
    
    async function fetchDepartment() {
        try {
            const response = await axios.get(
              `${urlApi}department`,
            );
            setDepartment(response.data.response)
          } catch (err) {
            console.error(err);
          }
    }

    async function addJabatan() {
        try {
            const response = await axios.post(
              `${urlApi}jabatan`,
              {
                ...inputVal
              }
            );
          } catch (err) {
            console.error(err);
          }
    }

    useEffect(()=>{
        fetchDepartment()
    }, [])

    return (
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" >
            Nama Jabatan
          </label>
          <input 
          onChange={handleChange}
          value={inputVal.nama_jabatan}
          name="nama_jabatan" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >
                Department
            </label>
            <select onChange={handleChange} name="id_department">
                {
                    department.map((el)=>{
                        return (
                            <option value={el?.id}>{el?.nama_department}</option>
                        )
                    })
                }
            </select>
        </div>     
        <div class="flex items-center justify-between">
          <button 
          onClick={()=>{addJabatan()}}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Add
          </button>
        </div>
      </form> 
    )
}