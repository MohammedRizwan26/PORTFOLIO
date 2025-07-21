"use client"

import { motion } from 'framer-motion';
import { Download, ExternalLink, MapPin, GraduationCap, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="outline" className="mb-4 border-black dark:border-white">
                  🤖 AI Certified • 3+ Internships
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-black dark:text-white"
              >
                Mohammed Rizwan G
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-muted-foreground max-w-lg"
              >
                Final-year CS student passionate about full-stack web development
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <MapPin className="w-5 h-5" />
                <span>Chennai, India</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
            <Button
  size="lg"
  onClick={() => window.open('/Rizwan.pdf', '_blank')}
  className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
>
  <Download className="w-5 h-5 mr-2" />
  Download Resume
</Button>

              <Button variant="outline" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile card and info grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile Avatar Card */}
            <Card className="p-6 bg-white dark:bg-gray-900 border-2 border-black dark:border-white">
              <CardContent className="flex flex-col items-center space-y-4 p-0">
                <div className="w-32 h-32 rounded-full bg-black dark:bg-white p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                    MR
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Mohammed Rizwan G</h3>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
              </CardContent>
            </Card>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-black dark:border-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-black dark:text-white" />
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-sm text-muted-foreground">Computer Science Final Year</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-black dark:border-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-black dark:text-white" />
                  <div>
                    <h4 className="font-semibold">Focus</h4>
                    <p className="text-sm text-muted-foreground">Full-Stack Web Development</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-black dark:border-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-black dark:text-white" />
                  <div>
                    <h4 className="font-semibold">Interests</h4>
                    <p className="text-sm text-muted-foreground">AI, Machine Learning, Web Tech</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}