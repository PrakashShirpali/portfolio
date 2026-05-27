import { BriefcaseBusiness } from "lucide-react"

type TimelineCardProps = {
  year: string
  role: string
  company: string
  description: string
}

export default function TimelineCard({
  year,
  role,
  company,
  description,
}: TimelineCardProps) {
  return (
    <div className="flex gap-x-4 w-fit items-center p-4">

      {/* Left Side */}
      <div className="flex flex-col items-center">

        <div className="flex items-center justify-center text-white rounded-full h-10 w-10 bg-mtheme">
          <BriefcaseBusiness className="size-5" />
        </div>

        <div className="h-20 w-0.5 bg-foreground/40"></div>

      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-y-2">

        <span className="text-pforeground opacity-80 uppercase text-xs text-center font-semibold bg-icon-background px-2 py-1 rounded-full w-fit">
          {year}
        </span>

        <div className="flex gap-x-2 items-center flex-wrap">

          <span className="text-pforeground uppercase font-bold">
            {role}
          </span>

          <div className="h-1 w-4 rounded-full bg-foreground/40"></div>

          <span className="text-pforeground opacity-80 uppercase text-sm">
            {company}
          </span>

        </div>

        <span className="text-pforeground opacity-80 max-w-lg text-sm">
          {description}
        </span>

      </div>

    </div>
  )
}