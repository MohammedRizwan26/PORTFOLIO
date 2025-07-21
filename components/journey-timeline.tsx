"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Briefcase, Trophy, Rocket } from 'lucide-react';

export function JourneyTimeline() {
  const timelineEvents = [
    {
      year: '2022',
      title: 'Started Computer Science Journey',
      description: 'Began my Bachelor\'s in Computer Science at Dhaanish Ahmed College of Engineering',
      icon: GraduationCap,
      color: 'from-gray-400 to-gray-600'
    },
    {
      year: '2023',
      title: 'First Internship & Web Development',
      description: 'Completed my first internship and dove deep into full-stack web development',
      icon: Code,
      color: 'from-gray-400 to-gray-600'
    },
    {
      year: '2024',
      title: 'Multiple Internships & AI Certification',
      description: 'Gained practical experience through 3+ internships and achieved AI certification',
      icon: Briefcase,
      color: 'from-gray-400 to-gray-600'
    },
    {
      year: '2024',
      title: 'Hackathons & Competitions',
      description: 'Participated in various hackathons and technical competitions',
      icon: Trophy,
      color: 'from-gray-400 to-gray-600'
    },
    {
      year: '2025',
      title: 'Final Year Project & Future',
      description: 'Working on AI-based final year project and preparing for career launch',
      icon: Rocket,
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Journey So Far</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my growth as a developer and computer science student
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-black dark:bg-white"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg`}
                >
                  <event.icon className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
              >
                <Card className="bg-white dark:bg-gray-800 border-2 border-black dark:border-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`text-center ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${event.color} mb-3`}>
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}