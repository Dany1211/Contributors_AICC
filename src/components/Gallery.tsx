import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp } from 'lucide-react';
import ContributorCard from './ContributorCard';
import { contributors } from '../data/contributors';

const Gallery: React.FC = () => {
  const totalContributions = contributors.reduce((sum, contributor) => sum + contributor.contributions, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block relative"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-neutral-900">
            Our Contributors
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-8 max-w-2xl text-lg tracking-tight text-neutral-600"
        >
          Meet the talented individuals who make our project possible. Each contributor brings unique skills and perspectives to our community.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center space-x-8 text-sm text-neutral-500"
        >
          <div className="flex items-center space-x-2">
            <Users size={16} />
            <span className="font-medium">{contributors.length} Contributors</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp size={16} />
            <span className="font-medium">{totalContributions} Total Contributions</span>
          </div>
        </motion.div>
      </div>

      {/* Contributors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributors.map((contributor, index) => (
          <ContributorCard
            key={contributor.id}
            contributor={contributor}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;