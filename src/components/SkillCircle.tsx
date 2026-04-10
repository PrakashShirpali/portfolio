import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type SkillCircleProps = {
  name: string;
  percent: number;
};

const SkillCircle = ({ name, percent }: SkillCircleProps) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // animated value
  const progress = useMotionValue(0);

  // number animation
  const rounded = useTransform(progress, (latest) => Math.round(latest));

  // background animation
  const background = useTransform(
    progress,
    (latest) =>
      `conic-gradient(var(--mtheme) ${latest}%, var(--icon-background) 0)`
  );

  useEffect(() => {
    if (isInView) {
      animate(progress, percent, { duration: 1.6, ease: "easeOut" });
    }
  }, [isInView, percent, progress]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">

      <motion.div
        style={{ background }}
        className="relative flex items-center justify-center w-30 h-30 rounded-full"
      >
        {/* inner circle */}
        <div className="absolute w-24 h-24 bg-pbackground rounded-full flex items-center justify-center">

          <div className="text-pforeground text-2xl font-semibold">
            <motion.span>{rounded}</motion.span>%
          </div>

        </div>
      </motion.div>

      <p className="text-pforeground tracking-wide">{name}</p>

    </div>
  );
};

export default SkillCircle;