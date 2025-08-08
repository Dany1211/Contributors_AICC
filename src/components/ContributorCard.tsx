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
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 group bg-white/90 border-gray-100/60 hover:shadow-2xl hover:shadow-black/10 hover:border-gray-200/80 hover:bg-white"
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
      
      {/* Avatar */}
      <div className="flex flex-col items-center space-y-5">
        <div className="overflow-hidden relative">
          <img
            src={contributor.avatar}
            alt={contributor.name}
            className="object-cover w-24 h-24 rounded-2xl ring-2 transition-all duration-500 ring-gray-100/80 group-hover:scale-110 group-hover:ring-gray-200 group-hover:shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent rounded-2xl opacity-0 transition-opacity duration-500 from-black/20 group-hover:opacity-100" />
        </div>
        
        {/* Name */}
        <h3 className="text-xl font-bold tracking-tight leading-tight text-center text-gray-900 transition-colors duration-300 group-hover:text-black">
          {contributor.name}
        </h3>
        
        {/* GitHub Handle */}
        <div className="flex items-center space-x-2 text-gray-500 transition-all duration-300 group-hover:text-gray-700">
          <Github size={18} className="opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="text-sm font-semibold tracking-wide">@{contributor.github}</span>
        </div>
      </div>
      
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out skew-x-12 pointer-events-none" />
    </motion.div>
  );
};

export default ContributorCard;