import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "CTO, QuantumSystems",
    content: "NEXUS REALITY transformed our entire infrastructure. Their quantum solutions are lightyears ahead of anything else in the market.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, FutureBank",
    content: "The level of innovation and expertise is unmatched. They didn't just meet our expectations – they redefined what we thought was possible.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Emily Zhang",
    role: "Founder, MetaHealth",
    content: "Working with NEXUS REALITY was like stepping into the future. Their quantum-powered solutions gave us a competitive edge we never imagined.",
    rating: 5,
    avatar: "EZ",
  },
];

export const Testimonials = () => {
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
            Quantum Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Voices from across dimensions praising our reality-bending work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group perspective-1000"
            >
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden transform-3d">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quote icon */}
                <div className="relative z-10 mb-6">
                  <Quote className="w-12 h-12 text-primary/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 mb-6">
                  <p className="text-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>

                {/* Rating */}
                <div className="relative z-10 flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <motion.div
                  className="absolute bottom-4 right-4 w-20 h-20 border border-primary/20 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
