import { motion } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "QuantumBank",
    category: "FinTech",
    description: "Next-gen banking with quantum encryption",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "NeuralHealth",
    category: "Healthcare",
    description: "AI-powered medical diagnostics",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "MetaCommerce",
    category: "E-Commerce",
    description: "Virtual reality shopping platform",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "SpaceLogistics",
    category: "Supply Chain",
    description: "Interplanetary delivery network",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "CryptoVerse",
    category: "Web3",
    description: "Decentralized metaverse ecosystem",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "EduQuantum",
    category: "Education",
    description: "Quantum learning management system",
    color: "from-yellow-500 to-amber-500",
  },
];

export const InfiniteCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Reality Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the boundaries of what's possible across infinite dimensions
          </p>
        </motion.div>
      </div>

      <div ref={constraintsRef} className="relative">
        <motion.div
          className="flex gap-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          initial={{ x: 0 }}
          animate={{ x: isDragging ? undefined : [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...projects, ...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[400px] h-[500px] relative group"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card h-full rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                {/* Animated grid */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-sm text-accent font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                {/* Decorative element */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 border-2 border-primary/30 rounded-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
