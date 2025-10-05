import { motion } from "framer-motion";
import { Building2, Shield, Zap, Globe, Cpu, Rocket } from "lucide-react";

const clients = [
  { name: "TechCorp", icon: Building2, color: "from-purple-500 to-pink-500" },
  { name: "SecureBank", icon: Shield, color: "from-cyan-500 to-blue-500" },
  { name: "PowerGrid", icon: Zap, color: "from-green-500 to-emerald-500" },
  { name: "GlobalNet", icon: Globe, color: "from-orange-500 to-red-500" },
  { name: "QuantumAI", icon: Cpu, color: "from-violet-500 to-purple-500" },
  { name: "SpaceX", icon: Rocket, color: "from-yellow-500 to-amber-500" },
];

export const CustomerSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Trusted Across Dimensions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading organizations trust NEXUS REALITY to power their quantum transformation
          </p>
        </motion.div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center aspect-square">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${client.color} mb-3 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {client.name}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </div>
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Quantum Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
