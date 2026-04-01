
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import PageTransition from "@/components/PageTransition";

const MainLayout = () => {
  return (
    <>
      <PageTransition>
        <div className="min-h-screen flex bg-pbackground max-md:flex-col">
          <main className="flex-1 flex">
            <Outlet />
          </main>
          <Navbar />
        </div>
      </PageTransition>
    </>
  )
}

export default MainLayout;