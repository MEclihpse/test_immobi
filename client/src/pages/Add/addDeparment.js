import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddDepartment() {
    const urlApi = `http://localhost:8080/api/`
    const navigate = useNavigate();

    const [inputVal, setInputVal] = useState({
        nama_department: "",
    });
    const handleChange = (e) => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        setInputVal({ ...inputVal, [name]: value, });
    };
    
    async function addDepartment() {
        try {
            const response = await axios.post(
              `${urlApi}department`,
              {
                ...inputVal
              }
            );
          } catch (err) {
            console.error(err);
          }
    }



    return (
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" >
            Nama Department
          </label>
          <input 
          onChange={handleChange}
          value={inputVal.nama_department}
          name="nama_department" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"/>
        </div>
        <div class="flex items-center justify-between">
          <button 
          onClick={()=>{addDepartment()}}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Add
          </button>
        </div>
      </form> 
    )
}