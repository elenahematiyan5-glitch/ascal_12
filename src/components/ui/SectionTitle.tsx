import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 relative"
    >
      <h2 className="text-4xl font-bold text-white mb-4">{children}</h2>
      <div className="w-20 h-1 bg-gradient-to-br from-[#00bfff] to-[#0080ff] mx-auto rounded-sm"></div>
    </motion.div>
  );
};
