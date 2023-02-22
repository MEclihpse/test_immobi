import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/layout";
import AddContainer from "../pages/Add/addContainer";
import AddDepartment from "../pages/Add/addDeparment";
import AddJabatan from "../pages/Add/addJabatan";
import AddKaryawan from "../pages/Add/addKaryawan";
import EditKaryawan from "../pages/karyawan/editKaryawan";
import Karyawan from "../pages/karyawan/karyawan";
import KaryawanContainer from "../pages/karyawan/karyawanContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "list-karyawan",
                element: <KaryawanContainer/>,
                children: [
                    {
                    path: "",
                    children: [
                        {
                        path: "",
                        element: <Karyawan/>,
                        },
                        {
                        path: ":id",
                        element: <EditKaryawan/>,
                        },
                    ],
                    },
                ],
            },
            {
                path: "",
                element: <AddContainer/>,
                children: [
                    {
                    path: "karyawan",
                    element: <AddKaryawan/>
                    },
                    {
                    path: "jabatan",
                    element: <AddJabatan/>
                    },
                    {
                    path: "department",
                    element: <AddDepartment/>
                    },
                ],
            }
        ]
    }])

export default router