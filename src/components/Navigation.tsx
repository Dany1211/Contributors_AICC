import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText } from 'lucide-react';

interface NavigationProps {
  activeTab: 'gallery' | 'documentation';
  onTabChange: (tab: 'gallery' | 'documentation') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="border-b border-neutral-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          <button
            onClick={() => onTabChange('gallery')}
            className="relative py-4 px-1 font-medium text-sm tracking-tight transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>Gallery</span>
            </div>
            {activeTab === 'gallery' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-800"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-200 ${
              activeTab === 'gallery' ? 'bg-transparent' : 'bg-transparent hover:bg-neutral-200'
            }`} />
          </button>
          <button
            onClick={() => onTabChange('documentation')}
            className="relative py-4 px-1 font-medium text-sm tracking-tight transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <FileText size={16} />
              <span>Documentation</span>
            </div>
            {activeTab === 'documentation' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-800"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-200 ${
              activeTab === 'documentation' ? 'bg-transparent' : 'bg-transparent hover:bg-neutral-200'
            }`} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;