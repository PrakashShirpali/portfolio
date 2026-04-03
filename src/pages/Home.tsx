import { Card } from "@/components/ui/card";
import { ArrowRight, Minus } from "lucide-react";
import prakash from "@/assets/images/prakash.jpeg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Home = () => {
  const MotionLink = motion(Link);
  return (
    <>

      <div className="relative flex-1 flex justify-evenly items-center max-md:flex-col max-md:justify-start max-md:p-3">

        <div className="diagonal bg-mtheme absolute inset-0 max-md:hidden"></div>

        <Card className="w-1/3 relative aspect-3/4 dark:shadow-[0_0_7px_oklch(0_0_0/0.9)] max-md:rounded-full max-md:w-64 max-md:h-64">
          <img className="w-full h-full object-cover" src={prakash} alt="prakash pic" />
        </Card>

        <div className="w-1/2 max-md:w-auto flex flex-col max-md:items-center max-md:p-4">
          <div className="text-mtheme flex font-bold text-5xl  max-sm:text-3xl max-md:text-center relative">
            <Minus className="max-md:hidden relative bottom-2" size={64} />
            <span className="font-(family-name:--font-poppin) uppercase">I'm Prakash Shirpali.</span>
          </div>
          <span className="uppercase font-bold text-5xl text-pforeground font-(family-name:--font-poppin) max-sm:text-3xl max-md:text-center">
            Full Stack Developer
          </span>
          <p className="w-full leading-8 my-6 px-2 text-base text-pforeground font-(family-name:--font-open) max-md:px-4 max-md:text-center">
            I'm an Indian based full stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>
          <MotionLink
            to="/about"
            initial="rest"
            whileHover="hover"
            className="relative overflow-hidden border-2 border-mtheme w-fit rounded-full flex items-center cursor-pointer group"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-mtheme origin-right"
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 }
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <span className="relative z-10 uppercase px-3 font-bold text-sm text-pforeground md:group-hover:text-white transition-colors duration-500">
              more about me
            </span>

            <Button asChild variant="mine">
              <ArrowRight
                className="relative z-10 text-white border-none"
                size={38}
                strokeWidth={5}
              />
            </Button>
          </MotionLink>
        </div>

      </div >
    </>
  )
}

export default Home;
