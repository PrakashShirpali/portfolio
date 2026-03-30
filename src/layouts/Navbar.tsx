import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { House, MailOpen, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navItems = [
    { path: "/", label: "Home", icon: House },
    { path: "/about", label: "About", icon: User },
    { path: "/contact", label: "Contact", icon: MailOpen },
  ];

  const base = "rounded-full pr-4.5 py-6";
  const active = "bg-mtheme text-white";
  const inactive = "";

  return (
    <div className="flex flex-col gap-y-8 pr-8 py-3 w-28 relative items-end">
      <ModeToggle />
      <ul className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-y-3 items-end">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.path}>
              <NavLink to={item.path} end={item.path === "/"}>
                {({ isActive }) => (
                  <Button
                    asChild
                    className={`${base} ${isActive ? active : inactive}`}>
                    <div className="flex items-center gap-2 group overflow-hidden">
                      <span className="max-w-0 opacity-0 group-hover:max-w-30 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden text-lg pl-1">
                        {item.label}
                      </span>
                      <Icon className="size-4" strokeWidth={3} />
                    </div>
                  </Button>
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