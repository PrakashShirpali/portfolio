import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { House, MailOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navItems = [
    { path: "/", label: "Home", icon: House },
    { path: "/about", label: "About", icon: User },
    { path: "/contact", label: "Contact", icon: MailOpen },
  ];

  return (
    <div className="flex flex-col gap-y-8 p-2 w-28">
      <ModeToggle />
      <ul className="flex flex-col gap-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.path}>
              <Button asChild>
                <Link to={item.path}>
                  <Icon />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden group-hover:block">
                    {item.label}
                  </span>
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Navbar;