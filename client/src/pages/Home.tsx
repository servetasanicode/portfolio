import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import ThreeBackground from '@/components/ThreeBackground';

const Home = () => {
  // Load font awesome script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Grid Background */}
      <div className="grid-background"></div>
      
      {/* Scanline Effect */}
      <div className="scanline"></div>
      
      {/* Particles Background */}
      <Particles count={50} />
      
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Home;
