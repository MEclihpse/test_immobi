import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditKaryawan() {
    const [department, setDepartment] = useState([])
    const [rawJabatan, setRawJabatan] = useState([])
    const [jabatan, setJabatan] = useState([])
    const urlApi = `http://localhost:8080/api/`
    const navigate = useNavigate();
    const {id} = useParams()

    const [inputVal, setInputVal] = useState({
        name: "",
        age: "",
        gender: null,
        tanggal_lahir: "",
        alamat: "",
        id_jabatan: null
    });
    const handleChange = (e) => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        setInputVal({ ...inputVal, [name]: value, });
    };

    const handleDepartment = (e) => {
        let value = e.currentTarget.value;
        const data = rawJabatan.filter((el)=> el.id_department == value)
        setJabatan(data)
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

    async function fetchJabatan() {
        try {
            const response = await axios.get(
              `${urlApi}jabatan`,
            );
            setRawJabatan(response.data.response)
          } catch (err) {
            console.error(err);
          }
    }
    
    async function fetchDetailKaryawan() {
        try {
            const response = await axios.get(
              `${urlApi}karyawan/${id}`,
            );
            const data = response.data.response
            setInputVal({
                name: data.name,
                age: data.age,
                gender: data.gender,
                tanggal_lahir: data.tanggal_lahir,
                alamat: data.alamat,
                id_jabatan: data.id_jabatan
            })
          } catch (err) {
            console.error(err);
          }
    }

    async function editKaryawan() {
        try {
            const splittedDate = inputVal.tanggal_lahir.split("-")
            const formatedDate = [splittedDate[2], splittedDate[1], splittedDate[0]].join("-")
            const response = await axios.put(
              `${urlApi}karyawan/${id}`,
              {
                name: inputVal.name,
                age: +inputVal.age,
                gender: inputVal.gender,
                tanggal_lahir: formatedDate,
                alamat: inputVal.alamat,
                id_jabatan: +inputVal.id_jabatan
              }
            );
            if (response) {
                navigate('/list-karyawan')
            }
          } catch (err) {
            console.error(err);
          }
    }

    useEffect(()=>{
        fetchDepartment()
        fetchJabatan()
        fetchDetailKaryawan()
    }, [])


    return (
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" >
            Name
          </label>
          <input 
          onChange={handleChange}
          value={inputVal.name}
          name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" >
            Age
          </label>
          <input 
          onChange={handleChange}
          value={inputVal.age}
          name="age"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" />
        </div>
        <div class="mb-4">
            <input type="radio" value="L" name="gender" onChange={handleChange}/> Male <br/>
            <input type="radio" value="P" name="gender" onChange={handleChange}/> Female
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >
            Tanggal Lahir
            </label>
            <input 
            onChange={handleChange}
            value={inputVal.tanggal_lahir}
            type="date" name="tanggal_lahir"
            />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" >
            Alamat
          </label>
          <input 
          onChange={handleChange}
          value={inputVal.alamat}
          name="alamat"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >
                Department
            </label>
            <select onChange={handleDepartment} name="department">
                {
                    department.map((el)=>{
                        return (
                            <option value={el?.id}>{el?.nama_department}</option>
                        )
                    })
                }
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" >
                Jabatan
            </label>
            <select onChange={handleChange} name="id_jabatan">
                {
                    jabatan.map((el)=>{
                        return (
                            <option value={el?.id}>{el?.nama_jabatan}</option>
                        )
                    })
                }
            </select>
        </div>
        <div class="flex items-center justify-between">
          <button 
          onClick={()=>{editKaryawan()}}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Add
          </button>
        </div>
      </form> 
    )
}