import React from 'react';
import { motion } from 'framer-motion';
import { Github, Award } from 'lucide-react';
import { Contributor } from '../data/contributors';

interface ContributorCardProps {
  contributor: Contributor;
  index: number;
}

const ContributorCard: React.FC<ContributorCardProps> = ({ contributor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="group relative bg-white rounded-2xl border border-neutral-150 overflow-hidden hover:border-neutral-200 transition-all duration-300"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`pattern-${contributor.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pattern-${contributor.id})`} />
        </svg>
      </div>

      <div className="relative p-6">
        <div className="flex items-start space-x-4">
          <motion.div
            className="relative flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={contributor.avatar}
              alt={contributor.name}
              className="w-16 h-16 rounded-xl object-cover border-2 border-neutral-100 group-hover:border-neutral-200 transition-colors duration-300"
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Award size={12} className="text-white" />
            </motion.div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-neutral-900 tracking-tight text-lg">
              {contributor.name}
            </h3>
            <p className="text-neutral-500 text-sm tracking-tight mt-1">
              {contributor.role}
            </p>
            
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center space-x-1 text-neutral-600">
                <Github size={14} />
                <span className="text-xs font-medium tracking-tight">@{contributor.github}</span>
              </div>
              <div className="text-xs text-neutral-400">
                <span className="font-semibold text-neutral-600">{contributor.contributions}</span> contributions
              </div>
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
        />
      </div>
    </motion.div>
  );
};

export default ContributorCard;