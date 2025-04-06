import { motion } from 'framer-motion';
import { experiences } from '@/lib/utils';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            <span className="text-primary">&lt;</span> Experience <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My professional journey in software development</p>
        </motion.div>

        <div className="relative vertical-timeline pl-8 md:pl-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="timeline-item relative pl-8 pb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className={`bg-card p-6 rounded-lg border ${exp.borderColor} neon-border`}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="font-space text-xl font-medium text-white">{exp.role}</h3>
                  <span className="text-primary font-mono">{exp.company}</span>
                </div>
                <p className="text-gray-300 mb-2 italic text-sm">{exp.period}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-background px-2 py-1 rounded text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* <motion.a 
            href="#"
            className="flex items-center text-primary hover:text-white transition-colors duration-300 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-file-alt mr-2"></i>
            Download Full Resume
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
