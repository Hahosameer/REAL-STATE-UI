// import "./pages/layout/layout.scss";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ListPage from "./pages/listPage/ListPage";
// // import Layout, { RequireAuth } from "./pages/layout/Layout";
// import SinglePage from "./pages/singlePage/SinglePage";
// import ProfilePage from "./pages/profilePage/ProfilePage";
// import Login from "./pages/loginPage/LoginPage";
// import Register from "./pages/register/Rigester";
// import { Layout, RequireAuth } from "./pages/layout/Layout";
// import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";
// import NewPostPage from "./pages/newPostPage/NewPostPage";
// import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loader";
// // import Home
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/:id",
//           element: <SinglePage />,
//           loader: singlePageLoader,
//         },
//         {
//           path: "/list",
//           element: <ListPage />,
//           loader: listPageLoader,
//         },
       
//         {
//           path: "/register",
//           element: <Register />,
//         },
//         {
//           path: "/login",
//           element: <Login />,
//         },
       
//       ],
//     },
//     {
//       path: "/",
//       element: <RequireAuth />,
//       children:[
//         {
//           path: "/profile",
//           element: <ProfilePage />,
//           loader:profilePageLoader,
//         },
//         {
//           path: "/profile/update",
//           element: <ProfileUpdatePage />,
//         },
//         {
//           path: "/add",
//           element: <NewPostPage />,
//         },
//       ]
//     },
//   ]);
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;
import "./pages/layout/layout.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Login from "./pages/loginPage/LoginPage";
import Register from "./pages/register/Rigester";
import { Layout, RequireAuth } from "./pages/layout/Layout";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./pages/newPostPage/NewPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  // Public routes with Layout
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,  // Protected routes with RequireAuth
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
