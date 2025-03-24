import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/utils';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const categories = ['All', 'Angular', 'React', 'Next.js', 'Mobile'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Angular':
      case 'Next.js':
        return 'bg-primary text-background';
      case 'React':
        return 'bg-accent text-background';
      case 'Mobile':
        return 'bg-secondary text-background';
      default:
        return 'bg-primary text-background';
    }
  };
  
  const getButtonColor = (category: string) => {
    switch(category) {
      case 'All':
        return `border-primary text-primary hover:bg-primary hover:text-background ${filter === category ? 'bg-primary text-background' : ''}`;
      case 'Angular':
      case 'Next.js':
        return `border-primary text-primary hover:bg-primary hover:text-background ${filter === category ? 'bg-primary text-background' : ''}`;
      case 'React':
        return `border-accent text-accent hover:bg-accent hover:text-background ${filter === category ? 'bg-accent text-background' : ''}`;
      case 'Mobile':
        return `border-secondary text-secondary hover:bg-secondary hover:text-background ${filter === category ? 'bg-secondary text-background' : ''}`;
      default:
        return `border-primary text-primary hover:bg-primary hover:text-background ${filter === category ? 'bg-primary text-background' : ''}`;
    }
  };

  return (
    <section id="projects" className="py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            <span className="text-accent">&lt;</span> Projects <span className="text-accent">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Showcasing my latest work across web and mobile platforms</p>
        </motion.div>

        <motion.div 
          className="mb-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button 
              key={index}
              className={`filter-btn bg-transparent border ${getButtonColor(category)} px-4 py-2 rounded-md transition-all duration-300 font-mono text-sm`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-card bg-card rounded-xl overflow-hidden border border-primary/20 shadow-lg relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent opacity-60"
                    initial={{ opacity: 0.6 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 0.8 : 0.6 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img 
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: hoveredProject === project.id ? 1.1 : 1 
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={`absolute top-2 right-2 ${getCategoryColor(project.category)} px-2 py-1 rounded text-xs font-mono`}>
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-space text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-background px-2 py-1 rounded text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={project.projectUrl} className="text-primary hover:text-white transition-colors duration-300 text-sm font-mono">
                      <i className="fas fa-eye mr-1"></i> View Project
                    </a>
                    <a href={project.githubUrl} className="text-secondary hover:text-white transition-colors duration-300 text-sm font-mono">
                      <i className="fab fa-github mr-1"></i> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a 
            href="#"
            className="inline-flex items-center bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-background px-6 py-3 rounded-md transition-all duration-300 font-space tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
