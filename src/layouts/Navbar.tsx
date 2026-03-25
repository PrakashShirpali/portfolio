import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-x-8 items-center p-2 justify-between">
      <ul className="flex gap-x-3">
        <li><Button asChild><Link to="/">Home</Link></Button></li>
        <li><Button asChild><Link to="/about">About</Link></Button></li>
        <li><Button asChild><Link to="/contact">Contact</Link></Button></li>

      </ul>
      <ModeToggle />
    </div>
  )
}

export default Navbar;