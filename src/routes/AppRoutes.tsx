import { Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

// import PublicLayout from "../layouts/PublicLayout"
// import PrivateLayout from "../layouts/PrivateLayout"

// import ProtectedRoute from "./ProtectedRoute"
// import RoleGuard from "./RoleGuard"

// import { publicRoutes, privateRoutes } from "./routeConfig"
import { routes } from "./routeConfig"
import MainLayout from "@/layouts/MainLayout"
import { AnimatePresence } from "framer-motion";

export default function AppRoutes() {

  const location = useLocation();
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>

          <Route element={<MainLayout />}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>

          {/* <Route element={<PublicLayout />}>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route> */}

          {/* <Route element={<ProtectedRoute />}>
          <Route element={<PrivateLayout />}>

            {privateRoutes.map((route, index) => (
              <Route
                key={index}
                element={<RoleGuard allowedRoles={route.roles} />}
              >
                <Route
                  path={route.path}
                  element={<route.component />}
                />
              </Route>
            ))}

          </Route>
        </Route> */}

        </Routes>

      </AnimatePresence>

    </Suspense>
  )
}