import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-background relative border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-orbitron text-primary animate-glow text-2xl font-bold">
              SERVET ASANI
            </span>
            <p className="mt-4 text-gray-400 text-sm">
              Full-stack developer specializing in Angular, React, and modern
              web technologies.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <i className="fab fa-dev text-xl"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-space text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-secondary"></i>{" "}
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-secondary"></i>{" "}
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-secondary"></i>{" "}
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-secondary"></i>{" "}
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-secondary"></i>{" "}
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-space text-white text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with my latest projects and articles.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="cyber-input flex-1 bg-card/60 border border-primary/30 rounded-l-md p-2 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-background px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-primary/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            © 2025 Servet Asani Portfolio. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Built with <span className="text-accent">♥</span> using Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
