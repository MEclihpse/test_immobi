import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav class="bg-white z-50 border-gray-200 p-2 w-full h-20">
    <div class="flex flex-wrap items-center justify-between ml-5">
      <NavLink to="/" class="flex items-center">
        {/* <img
          src=""
          alt="logo"
          width="150"
          class=""
        /> */}
        <div>
            DEVELOPER TEST
        </div>
      </NavLink>

      <div class="relative right-0 top-0 mr-8">
        <ul class="flex justify-items-end items-center">
          <li class="mr-2">
            <a class="opacity-60 hover:opacity-80 focus:opacity-80" href="#">
                test
            </a>
          </li>
          <li
            class="flex justify-center items-center mx-4 border-r-2 border-l-2 border-gray-300"
          >
            <div class="rounded-full bg-gray-500 w-8 h-8 mr-2 ml-4" />
            <div class="text-center text-gray-500 font-bold ml-2 mr-4">
              Ryan
            </div>
          </li>

          <li class="ml-2">
            <button class="opacity-60 hover:opacity-80 focus:opacity-80" >
                test
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}