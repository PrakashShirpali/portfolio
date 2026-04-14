import { Card } from "@/components/ui/card";
import { ArrowRight, Minus } from "lucide-react";
import prakash from "@/assets/images/prakash.jpeg"
import { Link } from "react-router-dom";
import PageButton from "@/components/PageButton";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  return (
    <div className="relative flex-1 flex justify-evenly items-center max-md:flex-col max-md:justify-start max-md:p-4">

      <div className="diagonal bg-mtheme absolute inset-0 max-md:hidden"></div>

      <Card className="w-1/3 relative aspect-3/4 dark:shadow-[0_0_7px_oklch(0_0_0/0.9)] max-md:rounded-full max-md:w-64 max-md:h-64">
        <img className="w-full h-full object-cover" src={prakash} alt="prakash pic" />
      </Card>

      <div className="w-1/2 max-md:w-auto flex flex-col max-md:items-center max-md:p-4">

        <div className="text-mtheme flex font-bold text-5xl max-sm:text-3xl max-md:text-center relative">
          <Minus className="max-md:hidden relative bottom-2" size={64} />
          <span className="font-(family-name:--font-poppin) uppercase">I'm Prakash Shirpali.</span>
        </div>

        <TypeAnimation
          sequence={[
            "Software Engineer",
            1000,
            "",                // delete text
            0,
            "Full Stack Developer",
            1000,
            "",                // delete text
            0,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          cursor={false}
          className="uppercase font-bold text-5xl text-pforeground font-(family-name:--font-poppin) max-sm:text-3xl max-md:text-center h-12"
        />

        <p className="w-full leading-8 my-6 px-2 text-base text-pforeground font-(family-name:--font-open) max-md:px-4 max-md:text-center">
          I'm an Indian based Software Engineer and Full Stack Developer who enjoys building efficient and reliable applications. I focus on writing clean, maintainable code and creating solutions that are practical, scalable, and user-friendly. I’m always learning, improving my problem-solving skills, and striving to build software that solves real-world problems.
        </p>

        <Link to="/about">
          <PageButton Icon={ArrowRight} text="more about me" />
        </Link>

      </div>

    </div >
  )
}

export default Home;
