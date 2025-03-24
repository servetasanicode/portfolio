import { motion } from 'framer-motion';
import { techStacks, specialSkills } from '@/lib/utils';

const TechStack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            <span className="text-secondary">&lt;</span> Tech Stack <span className="text-secondary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Proficient in modern frameworks and languages for full-stack development</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {techStacks.map((tech, index) => (
            <motion.div 
              key={index}
              className="tech-card bg-card p-6 rounded-lg border border-primary/10 hover:border-primary/40 flex flex-col items-center"
              variants={item}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                <i className={`${tech.icon} text-4xl ${tech.color}`}></i>
              </div>
              <h3 className="font-space text-lg font-medium mb-2">{tech.name}</h3>
              <div className="progress-bar w-full mt-2">
                <div className="progress-fill" style={{ width: `${tech.percentage}%` }}></div>
              </div>
              <span className="text-xs mt-1 text-gray-400">{tech.level}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-card/50 rounded-xl p-6 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-space text-xl mb-4 text-center">Special Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specialSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="flex items-center p-3 rounded-lg bg-gradient-to-r from-background to-card"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <i className={`${skill.icon} ${skill.color} mr-3`}></i>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
