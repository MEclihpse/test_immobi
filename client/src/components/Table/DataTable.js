import {  useLocation, NavLink } from "react-router-dom"
import axios from "axios";

export default function DataTable({data, fetch}) {
  const urlApi = `http://localhost:8080/api/`
    
  async function deleteKaryawan(id) {
    try {
        const response = await axios.delete(
          `${urlApi}jabatan/${id}`,
        );
        if (response) {
          fetch()
        }
      } catch (err) {
        console.error(err);
      }
}
  
  return (
        <div>
        <table class="table-auto w-full border-separate border-spacing-y-2">
          <thead class="text-md text-gray-700">
            <tr>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  Name
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  ID Jabatan
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  Age
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  Tanggal Lahir
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  Alamat
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  Action
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((el)=> {
                    return (
                    <tr key={el.id} class="bg-white p-5 text-gray-700">
                        
                        <td class="font-medium whitespace-nowrap">
                        <p class="text-left px-4 py-2">{
                            el.name
                        }</p>
                        </td>
                        <td class="font-medium whitespace-nowrap">
                        <p class="text-left px-4 py-2">{
                            el.id_jabatan
                        }</p>
                        </td>
                        <td class="font-medium whitespace-nowrap">
                        <p class="text-left px-4 py-2">{
                            el.age
                        }</p>
                        </td>
                        <td class="font-medium whitespace-nowrap">
                        <p class="text-left px-4 py-2">{
                            el.tanggal_lahir
                        }</p>
                        </td>
                        <td class="font-medium whitespace-nowrap">
                        <p class="text-left px-4 py-2">{
                            el.alamat
                        }</p>
                        </td>
                        <td class="font-medium whitespace-nowrap">
                        <div class="flex justify-start divide-x-2">
                            <NavLink
                            to={`./${el.id}`}
                            class="text-blue-500 text-center font-bold px-2">Edit</NavLink>
                            <button 
                            onClick={()=>{deleteKaryawan(el.id)}}
                            class="text-blue-500 text-center font-bold px-2">
                            Delete
                            </button>
                        </div>
                        </td>
                    </tr>
                    )
                })
            }
            
          </tbody>
        </table>
      </div>
    )
}