import { Button } from "@/components/ui/button";
import { HardDriveDownload, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";



const About = () => {
  return (
    <div className="flex-1 max-md:pb-12">
      <PageHeader first="about" second="me" third="resume" />

      <div className="flex items-center justify-evenly max-md:flex-col max-md:gap-y-6 p-4">
        <div className="flex flex-col max-md:items-center">
          <h1 className="text-2xl font-bold uppercase mb-6 text-pforeground max-sm:text-xl">personal information</h1>
          <ul className="grid grid-cols-2 gap-y-6 gap-x-10 text-pforeground max-md:text-center max-sm:flex max-sm:flex-col">
            <li>
              <span className="opacity-80">Name: </span>
              <span className="font-semibold text-pforeground">Prakash Shirpali</span>
            </li>
            <li>
              <span className="opacity-80">Age: </span>
              <span className="font-semibold">26</span>
            </li>
            <li>
              <span className="opacity-80">Nationality: </span>
              <span className="font-semibold">Indian</span>
            </li>
            <li>
              <span className="opacity-80">Freelance: </span>
              <span className="font-semibold text-green-500">Available</span>
            </li>
            <li>
              <span className="opacity-80">Address: </span>
              <span className="font-semibold">Goa</span>
            </li>
            <li>
              <span className="opacity-80">Phone: </span>
              <span className="font-semibold">+91 9172954506</span>
            </li>
            <li>
              <span className="opacity-80">Email: </span>
              <span className="font-semibold">prakashlalbahadur@gmail.com</span>
            </li>
            <li>
              <span className="opacity-80">Langages: </span>
              <span className="font-semibold">Hindi, English</span>
            </li>

          </ul>

        </div>

        <div className="flex gap-y-4 flex-col max-md:items-center">
          <div className="flex gap-x-4 max-sm:flex-col max-sm:gap-y-4">
            <div className="border rounded-sm p-6">
              <span className="text-mtheme text-5xl font-black flex">3<Plus strokeWidth={4} /></span>
              <span className="uppercase font-semibold text-pforeground flex relative w-36"><Minus strokeWidth={1} size={52} className="opacity-80 relative bottom-3" />years of experience</span>
            </div>
            <div className="border rounded-sm p-6">
              <span className="text-mtheme text-5xl font-black flex">10<Plus strokeWidth={4} /></span>
              <span className="uppercase font-semibold text-pforeground flex relative w-36"><Minus strokeWidth={1} size={52} className="opacity-80 relative bottom-3" />Completed Projects</span>
            </div>
          </div>
          <a href="/portfolio/PRAKASH_SHIRPALI_RESUME.pdf" target="blank">
            <motion.div
              whileHover="hover"
              initial="rest"
              className="relative overflow-hidden border-2 border-mtheme w-fit rounded-full flex items-center cursor-pointer group"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-mtheme"
                style={{ transformOrigin: "right" }}
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 }
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <span className="relative z-10 uppercase px-3 font-bold text-sm text-pforeground md:group-hover:text-white transition-colors duration-500">
                download resume
              </span>

              <Button asChild variant="mine">
                <HardDriveDownload
                  className="relative z-10 text-white border-none p-2"
                  size={48}
                  strokeWidth={3}
                />
              </Button>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About;