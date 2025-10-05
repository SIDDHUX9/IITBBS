import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ParallaxSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ minHeight: "120vh" }}
    >
      {/* Background layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/3 w-72 h-72 bg-accent/20 rounded-full blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          style={{ opacity, scale }}
          className="text-center"
        >
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8 glow-text">
              Multi-Dimensional
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </motion.div>

          <motion.p
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Journey through layers of reality as you scroll through our quantum-powered platform
          </motion.p>

          <motion.div
            style={{ y: y3 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { layer: "Layer 1", depth: "Surface Reality" },
              { layer: "Layer 2", depth: "Quantum Field" },
              { layer: "Layer 3", depth: "Deep Nexus" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="glass-card rounded-3xl p-8 perspective-1000"
              >
                <div className="text-4xl font-bold text-primary mb-4">
                  {item.layer}
                </div>
                <div className="text-lg text-muted-foreground">{item.depth}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
