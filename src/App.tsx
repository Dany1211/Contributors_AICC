import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import Documentation from './components/Documentation';

import logo from './assets/logo.png';

type TabType = 'gallery' | 'documentation';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('gallery');

  return (
    <div 
      className="min-h-screen font-sans tracking-tight"
      style={{
        backgroundImage: `
          linear-gradient(to right, #d1d5db 1px, transparent 1px),
          linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        backgroundColor: '#fafafa'
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <img src={logo} alt="Logo" className="w-14 h-14 rounded-lg" />
              <h1 className="text-xl font-bold text-neutral-900">AICC Contributors</h1>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {activeTab === 'gallery' ? (
            <motion.div key="gallery">
              <Gallery />
            </motion.div>
          ) : (
            <motion.div key="documentation">
              <Documentation />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;