
import { HardDriveDownload } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import PageButton from "@/components/PageButton";
import ShowCard from "@/components/ShowCard";
import SkillCircle from "@/components/SkillCircle";



const About = () => {

  const showcardData = [
    { number: 3, text: "years of experience" },
    { number: 10, text: "completed projects" }
  ];

  const personalInfo = [
    { label: "Name", value: "Prakash Shirpali" },
    { label: "Age", value: "26" },
    { label: "Nationality", value: "Indian" },
    { label: "Freelance", value: "Available", valueClass: "text-green-500" },
    { label: "Address", value: "Goa" },
    { label: "Phone", value: "+91 9172954506" },
    { label: "Email", value: "prakashlalbahadur@gmail.com" },
    { label: "Languages", value: "Hindi, English" },
  ];

  const skills = [
    { name: "React", percent: 90 },
    { name: "TypeScript", percent: 90 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "Java", percent: 70 },
    { name: "Laravel", percent: 80 },
    { name: "PostgreSQL", percent: 70 },
    { name: "GitHub", percent: 70 },
    { name: "Docker", percent: 80 },
  ];

  return (
    <div className="flex-1">

      <PageHeader first="about" second="me" third="resume" />

      <div className="flex items-center justify-evenly max-md:flex-col max-md:gap-y-6 p-4">

        <div className="flex flex-col max-md:items-center">
          <h1 className="text-2xl font-bold uppercase mb-6 text-pforeground max-sm:text-xl">personal information</h1>

          <ul className="grid grid-cols-2 gap-y-6 gap-x-10 text-pforeground max-md:text-center max-sm:flex max-sm:flex-col">
            {personalInfo.map((item) => (
              <li key={item.label}>
                <span className="opacity-80">{item.label}: </span>

                <span
                  className={`font-semibold ${item.valueClass ? item.valueClass : ""
                    }`}
                >
                  {item.value}
                </span>
              </li>
            ))}
          </ul>

        </div>

        <div className="flex gap-y-4 flex-col max-md:items-center">

          <div className="flex gap-x-4 max-sm:flex-col max-sm:gap-y-4">
            {showcardData.map((card, index) => (
              <ShowCard key={index} number={card.number} text={card.text} />
            ))}
          </div>

          <a href="/portfolio/PRAKASH_SHIRPALI_RESUME.pdf" target="blank">
            <motion.div
              whileHover="hover"
              initial="rest"
              className="relative overflow-hidden border border-mtheme w-fit h-fit rounded-full flex items-center cursor-pointer group"
            >
              <PageButton Icon={HardDriveDownload} text="download resume" />
            </motion.div>
          </a>

        </div>

      </div>

      <div className="flex flex-col items-center py-20 relative left-[50vw] -translate-x-1/2">
        <h1 className="text-2xl font-bold uppercase mb-6 text-pforeground max-sm:text-xl">My Skills</h1>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-y-6 gap-x-24 mt-4">
          {skills.map((skill, index) => (
            <SkillCircle key={index} name={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default About;