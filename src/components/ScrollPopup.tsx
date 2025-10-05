import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Zap, Rocket, Shield } from "lucide-react";
import { useRef } from "react";

const popupFeatures = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Next-gen neural networks",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Quantum speed processing",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Rocket,
    title: "Scale Infinitely",
    description: "Unlimited possibilities",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Ultra Secure",
    description: "Military-grade encryption",
    color: "from-orange-500 to-red-500",
  },
];

export const ScrollPopup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Scroll-Activated Powers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch features emerge as you journey through dimensions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popupFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const delay = index * 0.2;
            const start = 0.2 + delay * 0.1;
            const end = start + 0.3;
            
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const y = useTransform(scrollYProgress, [start, end], [100, 0]);
            const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);

            return (
              <motion.div
                key={index}
                style={{ opacity, y, scale }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="glass-card rounded-3xl p-8 relative overflow-hidden h-full">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 mb-6"
                  >
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color}`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>

                  {/* Decorative element */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-16 h-16 border-2 border-primary/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
