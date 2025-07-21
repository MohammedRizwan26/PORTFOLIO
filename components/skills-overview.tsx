"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function SkillsOverview() {
  const data = {
    labels: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Express.js', 'HTML/CSS', 'Figma'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 85, 80, 95, 88, 92, 75],
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 0, 0, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 0, 0, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
        pointLabels: {
          color: 'rgba(107, 114, 128, 1)',
          font: {
            size: 12,
          },
        },
        ticks: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Skill Overview</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive look at my technical expertise across different domains of web development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white dark:bg-gray-900 border-2 border-black dark:border-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Technical Skills Radar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full">
                <Radar data={data} options={options} />
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {data.labels.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-1 bg-background rounded-full border"
                  >
                    <div className="w-3 h-3 rounded-full bg-black dark:bg-white"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}