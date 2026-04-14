import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { House, MailOpen, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navItems = [
    { path: "/", label: "Home", icon: House },
    { path: "/about", label: "About", icon: User },
    { path: "/contact", label: "Contact", icon: MailOpen },
  ];

  return (
    <div className="flex-1 flex flex-col gap-y-8 pr-4 py-3 w-28 fixed right-0 h-dvh items-end max-md:h-auto max-md:pr-0 max-md:w-full z-30">
      <ModeToggle />
      <ul className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-y-3 items-end max-md:fixed max-md:bottom-0 max-md:top-auto max-md:translate-y-0 max-md:flex-row max-md:gap-x-3 max-md:bg-nav-background max-md:shadow-[0_0_47px_oklch(0.9_0_0)] dark:shadow-none max-md:w-full max-md:justify-evenly max-md:z-10 max-md:p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.path}>
              <NavLink to={item.path} end={item.path === "/"}>
                {({ isActive }) => (
                  <motion.div
                    initial="hidden"
                    whileHover="visible"
                    className="flex group items-center overflow-hidden rounded-full md:hover:bg-mtheme md:hover:text-white transition-colors duration-30"
                  >
                    <motion.span
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 60,
                          transition: { duration: 0 }
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.3 }
                        },
                      }}

                      className="whitespace-nowrap overflow-hidden bg-mtheme text-white text-lg rounded-full py-3 pl-4 font-semibold max-md:hidden"
                    >
                      {item.label}
                    </motion.span>
                    <Button
                      className={`rounded-full p-2 size-13 border-none bg-icon-background text-icon-foreground md:group-hover:bg-mtheme md:group-hover:text-white transition-colors duration-15 ${isActive ? "bg-mtheme max-md:bg-mtheme text-white" : ""}`}
                    >
                      <Icon strokeWidth={3} />
                    </Button>
                  </motion.div>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div >
  )
}

export default Navbar;