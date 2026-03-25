
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-pbackground">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout;