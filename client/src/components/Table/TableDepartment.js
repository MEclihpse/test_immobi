import {  useLocation, Outlet } from "react-router-dom"

export default function DataTable({data}) {
    return (
        <div>
        <table class="table-auto w-full border-separate border-spacing-y-2">
          <thead class="text-md text-gray-700">
            <tr>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  {"test"}
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  {"test"}
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  {"test"}
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  {"test"}
                </div>
              </th>
              <th class="px-4 py-2" >
                <div class="flex justify-start items-center">
                  {"test"}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key="row.id" class="bg-white p-5 text-gray-700">
    
              <td class="font-medium whitespace-nowrap">
                <p class="text-left px-4 py-2">{
                  "test"
                }</p>
                {/* <div v-if="col.type === 'editdelete'" class="flex justify-start divide-x-2">
                  <router-link
                    // :to="{ name: $route.name === 'Talent Management' ? 'Edit Talent' : $route.name === 'Member Management' ? 'Edit Member' : 'Edit Order', params: { id: row.id } }"
                    class="text-blue-500 text-center font-bold px-2">Edit</router-link>
                  <button class="text-blue-500 text-center font-bold px-2">
                    Delete
                  </button>
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}