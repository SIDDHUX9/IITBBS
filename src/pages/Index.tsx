import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { QuantumLoader } from "@/components/QuantumLoader";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { CustomerSection } from "@/components/CustomerSection";
import { StatsSection } from "@/components/StatsSection";
import { DataGraph } from "@/components/DataGraph";
import { ParallaxSection } from "@/components/ParallaxSection";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { ScrollPopup } from "@/components/ScrollPopup";
import { RippleEffect } from "@/components/RippleEffect";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { StrikingObject } from "@/components/StrikingObject";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // GSAP scroll animations
      const sections = document.querySelectorAll("section");
      
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <QuantumLoader onLoadComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <main className="relative min-h-screen">
          <ParticleBackground />
          <CustomCursor />
          
          <Hero />
          <FeatureCards />
          <CustomerSection />
          <ParallaxSection />
          <StatsSection />
          <DataGraph />
          <ScrollPopup />
          <InfiniteCarousel />
          <RippleEffect />
          <div className="relative py-32 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
                Impossible Geometry
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A morphing torus knot that defies the laws of physics
              </p>
            </div>
            <StrikingObject />
          </div>
          <Testimonials />
          <CTASection />
          
          {/* Footer */}
          <footer className="relative py-12 px-6 border-t border-border/30">
            <div className="max-w-7xl mx-auto text-center">
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                NEXUS REALITY
              </div>
              <p className="text-muted-foreground mb-6">
                Transcending dimensions. Building the future. One quantum at a time.
              </p>
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Quantum Solutions</a>
                <a href="#" className="hover:text-primary transition-colors">Neural Networks</a>
                <a href="#" className="hover:text-primary transition-colors">Reality Labs</a>
                <a href="#" className="hover:text-primary transition-colors">Contact Nexus</a>
              </div>
              <div className="mt-8 text-xs text-muted-foreground/50">
                © 2024 NEXUS REALITY. All dimensions reserved.
              </div>
            </div>
          </footer>
        </main>
      )}
    </>
  );
};

export default Index;
