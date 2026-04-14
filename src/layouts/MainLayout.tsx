
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import PageTransition from "@/components/PageTransition";

const MainLayout = () => {
  return (
    <div className="min-h-dvh flex bg-pbackground max-md:flex-col">
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Navbar />
    </div>
  )
}

export default MainLayout;