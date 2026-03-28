
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex bg-pbackground">
        <Navbar />
        <div className="flex-1 flex p-2">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout;