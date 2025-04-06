import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3 
              className="text-accent font-mono text-sm md:text-base mb-2 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >&lt;// Full Stack Engineer &gt;</motion.h3>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="inline-block">Web & Mobile</span> 
              <span className="text-primary animate-glow ml-2">Developer</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Specializing in <span className="text-secondary">Angular</span>, <span className="text-primary">React</span>, and <span className="text-accent">Next.js</span> with a strong 
              foundation in <span className="text-secondary">Python</span>, <span className="text-primary">ASP.NET</span>, and <span className="text-accent">Node.js</span>. 
              Building futuristic, responsive web experiences with a focus on performance.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#projects" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-md transition-all duration-300 font-space tracking-wider">
                View Projects
              </a>
              <a href="#contact" className="bg-primary text-background hover:bg-transparent hover:text-primary border-2 border-primary px-6 py-3 rounded-md transition-all duration-300 font-space tracking-wider">
                Contact Me
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
            <a
              href="https://github.com/servetasanicode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/servetasani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
            <i className="fab fa-linkedin text-xl"></i>
          </a>

            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/servet.jpeg"
                alt="Hero Image"
                className="w-3/6 h-6/6 md:w-11/12 md:h-11/12 object-cover rounded-full shadow-lg"
              />
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
