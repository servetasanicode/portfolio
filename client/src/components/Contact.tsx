import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { contactInfo } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your server
      console.log('Form data', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            <span className="text-secondary">&lt;</span> Contact Me <span className="text-secondary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Let's collaborate on your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={`cyber-input w-full bg-card/60 border ${errors.name ? 'border-red-500' : 'border-primary/30'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="John Doe" 
                  {...register('name')}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`cyber-input w-full bg-card/60 border ${errors.email ? 'border-red-500' : 'border-primary/30'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="your@email.com" 
                  {...register('email')}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-mono text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`cyber-input w-full bg-card/60 border ${errors.subject ? 'border-red-500' : 'border-primary/30'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="Project Discussion" 
                  {...register('subject')}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className={`cyber-input w-full bg-card/60 border ${errors.message ? 'border-red-500' : 'border-primary/30'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="Tell me about your project..." 
                  {...register('message')}
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>
              
              <div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-background font-space font-medium py-3 px-4 rounded-md hover:opacity-90 transition-all duration-300 disabled:opacity-50"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-48 h-48 mb-8 mx-auto md:mx-0"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-xl"></div>
              <div className="absolute inset-8 rounded-full bg-card"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-paper-plane text-6xl text-secondary animate-float"></i>
              </div>
            </motion.div>
            
            <div className="space-y-6 w-full">
              <motion.div 
                className="p-4 bg-card/50 rounded-lg border border-secondary/20 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bg-background p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me At</p>
                  <p className="font-mono text-white">{contactInfo.email}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-card/50 rounded-lg border border-secondary/20 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bg-background p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-accent"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-mono text-white">{contactInfo.location}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-4 bg-card/50 rounded-lg border border-secondary/20 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="bg-background p-3 rounded-full mr-4">
                  <i className="fas fa-clock text-secondary"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Working Hours</p>
                  <p className="font-mono text-white">{contactInfo.workingHours}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
