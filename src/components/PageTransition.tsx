import { motion } from "framer-motion"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">

      {/* Sliding layer */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: ["0%", "100%"] }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="fixed inset-0 bg-icon-background z-20"
      />

      {/* Page content */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeOut"
        }}
        className="relative min-h-screen flex"
      >
        {children}
      </motion.div>

    </div>
  )
}