
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex bg-pbackground">
        <main className="flex-1 flex">
          <Outlet />
        </main>
        <Navbar />
      </div>
    </>
  )
}

export default MainLayout;