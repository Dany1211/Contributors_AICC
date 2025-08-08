import React from 'react';
import { motion } from 'framer-motion';
import { Github, Users, TrendingUp } from 'lucide-react';
import { contributors } from '../data/contributors';

interface Contributor {
  id: string;
  name: string;
  github: string;
  avatar: string;
  contributions: number;
}

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
      className="relative p-5 rounded-3xl border backdrop-blur-sm transition-all duration-500 group bg-white/90 border-gray-100/60 hover:shadow-2xl hover:shadow-black/10 hover:border-gray-200/80 hover:bg-white"
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
      
      {/* Avatar */}
      <div className="flex flex-col items-center space-y-4">
        <div className="overflow-hidden relative">
          <img
            src={contributor.avatar}
            alt={contributor.name}
            className="object-cover w-32 h-32 rounded-2xl ring-2 transition-all duration-500 ring-gray-100/80 group-hover:scale-110 group-hover:ring-gray-200 group-hover:shadow-xl"
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

const Gallery: React.FC = () => {
  const totalContributions = contributors.reduce((sum, contributor) => sum + contributor.contributions, 0);

  return (
    <div className="px-6 py-12 mx-auto max-w-6xl sm:px-8 lg:px-12">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <div className="inline-block relative">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-neutral-900">
            Our Contributors
          </h1>
        </div>

        <p className="mx-auto mb-8 max-w-2xl text-lg tracking-tight text-neutral-600">
          Meet the talented individuals who make our project possible. Each contributor brings unique skills and perspectives to our community.
        </p>

        {/* Stats */}
        <div className="flex justify-center items-center space-x-8 text-sm text-neutral-500">
          <div className="flex items-center space-x-2">
            <Users size={16} />
            <span className="font-medium">{contributors.length} Contributors</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp size={16} />
            <span className="font-medium">{totalContributions} Total Contributions</span>
          </div>
        </div>
      </div>

      {/* Contributors Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contributors.map((contributor, index) => (
          <ContributorCard
            key={contributor.id}
            contributor={contributor}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;