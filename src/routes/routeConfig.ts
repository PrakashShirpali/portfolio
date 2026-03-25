import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

// export const publicRoutes = [
//   {
//     path: "/login",
//     component: Login,
//   },
//   {
//     path: "/register",
//     component: Register,
//   },
// ]

// export const privateRoutes = [
//   {
//     path: "/dashboard",
//     component: Dashboard,
//     roles: ["user", "admin"],
//   },
//   {
//     path: "/profile",
//     component: Profile,
//     roles: ["user", "admin"],
//   },
// ]
