import { motion } from "framer-motion";
import { Button } from "./ui/button";
import type { LucideIcon } from "lucide-react";

type PageButtonProps = {
  Icon: LucideIcon;
  text?: string;
};

const PageButton = ({ Icon, text }: PageButtonProps) => {

  return (
    <>
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
      <span className="relative z-10 uppercase px-4 font-bold text-sm text-pforeground md:group-hover:text-white transition-colors duration-500">
        {text}
      </span>

      <Button className="relative z-10 text-white border-none rounded-full h-14 w-14" variant={"mine"}>
        <Icon
          className="size-6 shrink-0"
          strokeWidth={3}
        />
      </Button></>
  )
}

export default PageButton;
