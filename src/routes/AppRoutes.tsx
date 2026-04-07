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
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function AppRoutes() {

  const location = useLocation();
  return (
    <Suspense fallback={<div className="flex flex-col items-center gap-4">
      <Button className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-mtheme  pointer-events-none text-lg p-2">
        <Spinner />
        Loading...
      </Button>
    </div>}>

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