import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
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
        scale: 1.03,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
      }}
      className="group relative bg-gradient-to-br from-white via-neutral-50 to-neutral-200 rounded-3xl border border-neutral-100 shadow-xl overflow-hidden transition-all duration-300 h-full min-h-[280px] flex flex-col items-center justify-center"
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

      <div className="flex flex-col items-center p-10 w-full">
        <img
          src={contributor.avatar}
          alt={contributor.name}
          className="w-48 h-48 rounded-3xl object-cover border-4 border-white shadow-lg mb-4 transition-transform duration-300 group-hover:scale-105"
        />
        <h3 className="font-semibold text-neutral-900 tracking-tight text-base text-center mb-1 font-sans">
          {contributor.name}
        </h3>
        <div className="flex items-center justify-center space-x-3 mt-3">
          <div className="flex items-center space-x-1 text-neutral-600">
            <Github size={16} />
            <span className="text-xs font-medium tracking-tight">@{contributor.github}</span>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
      />
    </motion.div>
  );
};

export default ContributorCard;