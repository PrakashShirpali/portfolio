import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

type PageButtonProps = {
  Icon: LucideIcon
  text?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

const MotionButton = motion.create("button")

const PageButton = ({
  Icon,
  text,
  type = "button",
  disabled
}: PageButtonProps) => {

  return (
    <MotionButton
      type={type}
      disabled={disabled}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative overflow-hidden border border-mtheme rounded-full flex items-center cursor-pointer group"
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

      {/* Text */}
      {text && (
        <span className="relative z-10 uppercase px-4 font-bold text-sm text-pforeground md:group-hover:text-white transition-colors duration-500">
          {text}
        </span>
      )}

      {/* Icon circle */}
      <div className="relative z-10 flex items-center justify-center text-white rounded-full h-14 w-14 bg-mtheme">
        <Icon className="size-6 shrink-0" strokeWidth={3} />
      </div>

    </MotionButton>
  )
}

export default PageButton