import AdminProfile from "../pages/Admin/Profile/";
import AdminSignIn from "../pages/Admin";
import AdminUserAdd from "../pages/Admin/UserAdd";
import AdminUsers from "../pages/Admin/Users";
import AdminPublications from "../pages/Admin/Publications";
import AdminPrograms from "../pages/Admin/Programs";
import AdminPublicitys from "../pages/Admin/Publicitys";

import LayoutAdmin from "../layouts/LayoutAdmin";
//import LayoutBasic from "../layouts/LayoutBasic";

/*
    Se utiliza un arreglo para definir cada una de las rutas. 
    El arreglo tiene a su vez otro arreglo que contiene subrutas.
*/
const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin/profile",
        component: AdminProfile,
        exact: true,
      },
      {
        path: "/admin/publications",
        component: AdminPublications,
        exact: true,
      },
      {
        path: "/admin/programs",
        component: AdminPrograms,
        exact: true,
      },
      {
        path: "/admin/users",
        component: AdminUsers,
        exact: true,
      },
      {
        path: "/admin/publicitys",
        component: AdminPublicitys,
        exact: true,
      },
      {
        path: "/admin/users/user-add",
        component: AdminUserAdd,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
    ],
  },

];

//Se exportan las rutas
export default routes;
