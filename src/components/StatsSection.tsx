import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Quantum Operations/sec" },
  { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { value: 500, suffix: "+", label: "Enterprise Clients" },
  { value: 150, suffix: "ms", label: "Global Latency" },
];

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
}

const AnimatedCounter = ({ value, suffix, label, index }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const displayValue = useMotionValue("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (suffix === "%") {
        displayValue.set(latest.toFixed(1));
      } else {
        displayValue.set(Math.floor(latest).toLocaleString());
      }
    });
  }, [springValue, displayValue, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        
        <div className="relative z-10">
          <motion.div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            <motion.span>{displayValue}</motion.span>
            {suffix}
          </motion.div>
          <div className="text-muted-foreground text-lg">{label}</div>
        </div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-2 border-primary/30 rounded-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Quantum Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
