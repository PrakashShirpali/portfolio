import { Card } from "@/components/ui/card";
import { ArrowRight, Minus } from "lucide-react";
import demopic from "@/assets/images/demopic.jpg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="flex-1 flex items-center justify-around">

        <div className="w-2/5">
          <h1 className="text-mtheme flex items-center uppercase font-bold text-4xl">
            <Minus size={64} />
            I'm Prakash Shirpali.
          </h1>
          <span className="uppercase font-bold text-4xl">
            Software Engineer
          </span>
          <p className="leading-8 font-[open-sans] my-6">
            I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>
          <Link to="/about" className="border-2 border-mtheme w-fit rounded-full flex items-center hover:bg-mtheme cursor-pointer leading-0">
            <span className=" uppercase px-6 py-2">
              more about me
            </span>
            <Button variant="mine" >
              <ArrowRight size={256} />
            </Button>
          </Link>
        </div>

        <Card className="w-2/6 h-10/12">
          <img className="h-full" src={demopic} alt="prakash pic" />
        </Card>

      </div >
    </>
  )
}

export default Home;
