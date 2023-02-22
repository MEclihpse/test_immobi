import {  useLocation, Outlet } from "react-router-dom"

export default function KaryawanContainer() {
    const location = useLocation();
    const routeName = location.pathname;

    return (
        <div class="flex flex-col p-8 pr-10 divide-2 w-full overflow-auto content-container">
        <div class="flex justify-between content-center border-b-2 border-gray-400 py-4">
          <div class="text-2xl text-gray-500 font-bold">Karyawan</div>
          <div class="flex justify-center items-center">
            <div class="text-md text-gray-500 font-bold">Karyawan</div>
            <div class="text-md text-gray-500 font-bold mx-2">
            </div>
            <div class="text-md text-gray-400 font-bold">
              -- {routeName?.substring?.(1)}
            </div>
          </div>
        </div>
        <div class="color-grey-500">
          <Outlet/>
        </div>
      </div>
    )
}