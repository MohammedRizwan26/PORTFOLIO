"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function TechStackToggle() {
  const [activeTab, setActiveTab] = useState('frontend');

  const techStacks = {
    frontend: [
      { name: 'React', icon: '⚛️', color: 'from-gray-400 to-gray-600' },
      { name: 'HTML', icon: '🌐', color: 'from-gray-400 to-gray-600' },
      { name: 'CSS', icon: '🎨', color: 'from-gray-400 to-gray-600' },
      { name: 'Tailwind', icon: '💨', color: 'from-gray-400 to-gray-600' },
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: 'from-gray-400 to-gray-600' },
      { name: 'Express.js', icon: '🚀', color: 'from-gray-400 to-gray-600' },
      { name: 'Python', icon: '🐍', color: 'from-gray-400 to-gray-600' },
      { name: 'Java', icon: '☕', color: 'from-gray-400 to-gray-600' },
      { name: 'C++', icon: '⚡', color: 'from-gray-400 to-gray-600' },
    ],
    tools: [
      { name: 'MongoDB', icon: '🍃', color: 'from-gray-400 to-gray-600' },
      { name: 'Git', icon: '📚', color: 'from-gray-400 to-gray-600' },
      { name: 'Figma', icon: '🎨', color: 'from-gray-400 to-gray-600' },
      { name: 'Postman', icon: '📬', color: 'from-gray-400 to-gray-600' },
    ],
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend', emoji: '🎨' },
    { id: 'backend', label: 'Backend', emoji: '⚙️' },
    { id: 'tools', label: 'Tools', emoji: '🛠️' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my technical arsenal across different development domains
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white dark:bg-gray-800 rounded-lg p-2 border border-black dark:border-white shadow-lg">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg' 
                    : 'hover:bg-muted'
                }`}
              >
                <span className="mr-2">{tab.emoji}</span>
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tech cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {techStacks[activeTab as keyof typeof techStacks].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-2 border-black dark:border-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {tech.icon}
                    </motion.div>
                    <h3 className="font-semibold text-lg group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                      {tech.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}