import {Outlet} from 'react-router-dom'
import NavBar from '../Navigation/NavBar'
import SideBar from '../Navigation/SideBar'

export default function Layout() {
    return ( 
        <div class="h-screen w-screen flex-col overflow-hidden">
        <NavBar />
        <div class="flex">
          <SideBar />
          <Outlet/>
        </div>
      </div>  
    )
}