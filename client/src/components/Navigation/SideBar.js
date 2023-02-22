import { Link, NavLink, useLocation } from "react-router-dom"

export default function SideBar() {
    const location = useLocation();
    const routeName = location.pathname;

    return (
    <div class="sidebar-container z-10 flex-col bg-gray-400 w-60 overflow-auto py-5 pb-20">
        <div class="self-start">
        <div class={routeName === '/list-karyawan'
            ? 'bg-slate-600 border-gray-600 border-l-4 border-r-4 flex w-full p-5'
            : 'flex w-full p-5' } >
            <div class="mx-5">
            </div>
            <NavLink to="/list-karyawan" class="block text-gray-100 hover:text-white text-sm">Karyawan</NavLink>
        </div>
        </div>
        <div class="self-start">
        <div class={routeName === '/karyawan'
           ? 'bg-slate-600 border-gray-600 border-l-4 border-r-4 flex w-full p-5'
           : 'flex w-full p-5' }>
            <div class="mx-5">
            </div>
            <NavLink to="/karyawan" class="block text-gray-100 hover:text-white text-sm">Add Karyawan</NavLink>
        </div>
        </div>
        <div class="self-start">
        <div class={routeName === '/jabatan'
            ? 'bg-slate-600 border-gray-600 border-l-4 border-r-4 flex w-full p-5'
            : 'flex w-full p-5' }>
            <div class="mx-5">
            </div>
            <NavLink to="/jabatan" class="block text-gray-100 hover:text-white text-sm">Add Jabatan</NavLink>
        </div>
        </div>
        <div class="self-start">
        <div class={routeName === '/department'
            ? 'bg-slate-600 border-gray-600 border-l-4 border-r-4 flex w-full p-5'
            : 'flex w-full p-5' }>
            <div class="mx-5">
            </div>
            <NavLink to="/department" class="block text-gray-100 hover:text-white text-sm">Add Department</NavLink>
        </div>
        </div>
  </div>
    )
}