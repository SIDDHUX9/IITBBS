import { motion, useMotionValue, useTransform } from "framer-motion";
import { Cpu, Globe, Rocket, Shield, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Cpu,
    title: "Quantum Computing",
    description: "Harness the power of quantum processors for unprecedented computational capabilities.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Neural Networks",
    description: "AI-powered systems that learn, adapt, and evolve with your business needs.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Rocket,
    title: "Hyperspace Deploy",
    description: "Deploy at lightspeed with our revolutionary quantum deployment pipeline.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Quantum Security",
    description: "Unbreakable encryption using quantum entanglement and advanced cryptography.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "Reality Synthesis",
    description: "Merge physical and digital realms with our AR/VR quantum experiences.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Infinite Scale",
    description: "Scale beyond limits with our self-optimizing quantum infrastructure.",
    gradient: "from-yellow-500 to-amber-500",
  },
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000"
    >
      <div className="glass-card p-8 rounded-3xl transition-all duration-300 transform-3d">
        {/* Gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
          style={{ transform: "translateZ(10px)" }}
        />

        {/* Icon */}
        <motion.div
          className="mb-6 inline-block"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transform: "translateZ(50px)" }}
        >
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} glow-border`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <h3
          className="text-2xl font-bold mb-3 text-foreground"
          style={{ transform: "translateZ(40px)" }}
        >
          {feature.title}
        </h3>
        <p
          className="text-muted-foreground leading-relaxed"
          style={{ transform: "translateZ(30px)" }}
        >
          {feature.description}
        </p>

        {/* Decorative corner */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100"
          animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export const FeatureCards = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Quantum Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionary technologies that transcend the boundaries of conventional computing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
