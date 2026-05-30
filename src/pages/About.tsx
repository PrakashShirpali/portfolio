
import { HardDriveDownload } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageButton from "@/components/PageButton";
import ShowCard from "@/components/ShowCard";
import SkillCircle from "@/components/SkillCircle";
import TimelineCard from "@/components/TimelineCard";



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
    { label: "Address", value: "Dabolim, Goa" },
    { label: "Phone", value: "+91 9172954506" },
    { label: "Email", value: "prakashlalbahadur@gmail.com" },
    { label: "Languages", value: "Hindi, English" },
  ];

  const skills = [
    { name: "Next.js", percent: 80 },
    { name: "TypeScript", percent: 85 },
    { name: "tailwindcss", percent: 90 },
    { name: "Java", percent: 75 },
    { name: "Spring Boot REST APIs", percent: 75 },
    { name: "PostgreSQL", percent: 80 },
    { name: "GitHub", percent: 80 },
    { name: "Docker", percent: 70 },
    { name: "Python", percent: 70 },
    { name: "LangChain", percent: 70 },
    { name: "FastAPI", percent: 70 },
    { name: "RAG", percent: 70 },
  ];

  const experiences = [
    {
      year: "2024 - Present",
      role: "Software Engineer",
      company: "Aeologic Technologies Pvt Ltd",
      description:
        "Developed scalable web application using Laravel and React.",
    },

    {
      year: "2023 - 2024",
      role: "Full Stack Java Developer",
      company: "Profound Eductech Pvt Ltd",
      description:
        "Worked on developing full stack web applications using Java, Spring Boot.",
    },
  ]

  const education = [
    {
      year: "2024 - 2026",
      role: "MCA",
      company: "Chandigarh University",
      description:
        "Master of Computer Applications. Specialization in AIML",
    },

    {
      year: "2019 - 2022",
      role: "BSC",
      company: "Dhempe College of Arts & Science",
      description:
        "Focused on Full Stack Development.",
    },
  ]

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

          <a href="/portfolio/Prakash_Shirpali_Resume.pdf" target="blank" className="w-fit">
            <PageButton Icon={HardDriveDownload} text="download resume" />
          </a>

        </div>

      </div>

      <div className="flex flex-col items-center pt-20 relative left-[50vw] -translate-x-1/2">
        <h1 className="text-2xl font-bold uppercase mb-6 text-pforeground max-sm:text-xl">My Skills</h1>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-y-8 md:gap-x-24 mt-4">
          {skills.map((skill, index) => (
            <SkillCircle key={index} name={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center py-20 relative left-[50vw] -translate-x-1/2">
        <h1 className="text-2xl font-bold uppercase mb-8 text-pforeground max-sm:text-xl">Experience & Education</h1>
        <div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Experience */}
            <div className="flex flex-col gap-y-8">

              {experiences.map((experience, index) => (
                <TimelineCard
                  key={index}
                  year={experience.year}
                  role={experience.role}
                  company={experience.company}
                  description={experience.description}
                />
              ))}

            </div>

            {/* Education */}
            <div className="flex flex-col gap-y-8">

              {education.map((item, index) => (
                <TimelineCard
                  key={index}
                  year={item.year}
                  role={item.role}
                  company={item.company}
                  description={item.description}
                />
              ))}

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default About;