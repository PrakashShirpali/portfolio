import { Card } from "@/components/ui/card";
import { ArrowRight, Minus } from "lucide-react";
import prakashS from "@/assets/images/prakashS2.jpeg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>

      <div className="relative flex-1 flex items-center justify-around max-md:flex-col max-md:justify-start max-md:p-3">

        <div className="diagonal bg-mtheme absolute inset-0 max-md:hidden"></div>

        <Card className="w-1/3 relative aspect-3/4 dark:shadow-[0_0_7px_oklch(0_0_0/0.9)] max-md:rounded-full max-md:w-64 max-md:h-64">
          <img className="w-full h-full object-cover" src={prakashS} alt="prakash pic" />
        </Card>

        <div className="w-2/5 max-md:w-auto max-md:flex max-md:flex-col max-md:items-center max-md:p-4">
          <h1 className="text-mtheme flex items-center uppercase font-bold text-4xl font-(family-name:--font-poppin) max-sm:text-3xl max-md:text-center">
            <Minus className="max-md:hidden" size={64} />
            I'm Prakash Shirpali.
          </h1>
          <span className="uppercase font-bold text-4xl text-pforeground font-(family-name:--font-poppin) max-sm:text-3xl max-md:text-center">
            Full Stack Developer
          </span>
          <p className="leading-8 my-6 text-base text-pforeground font-(family-name:--font-open) max-md:px-4 max-md:text-center">
            I'm an Indian based full stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>
          <Link
            to="/about"
            className="relative overflow-hidden border-2 border-mtheme w-fit rounded-full flex items-center cursor-pointer group"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-mtheme scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></div>

            {/* Content */}
            <span className="relative z-10 uppercase px-3 font-bold text-sm text-pforeground group-hover:text-white transition-colors duration-500">
              more about me
            </span>

            <Button asChild variant="mine" >
              <ArrowRight className="relative z-10 text-white border-none" size={38} strokeWidth={5} />
            </Button>
          </Link>
        </div>

      </div >
    </>
  )
}

export default Home;
