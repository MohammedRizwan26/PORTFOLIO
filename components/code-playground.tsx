"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Copy } from 'lucide-react';

export function CodePlayground() {
  const [activeExample, setActiveExample] = useState(0);

  const codeExamples = [
    {
      title: 'React useState Hook',
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4">Count: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}`,
      output: (
        <div className="p-4 text-center bg-gray-50 dark:bg-gray-800 rounded">
          <h2 className="text-2xl mb-4">Count: 5</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Increment
          </button>
        </div>
      )
    },
    {
      title: 'Express.js API Route',
      code: `const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Mohammed Rizwan' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Jane Smith' }
  ];
  
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
      output: (
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded">
          <div className="font-mono text-sm">
            <div className="text-green-600 mb-2">GET /api/users</div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
              <pre>{JSON.stringify([
                { id: 1, name: 'Mohammed Rizwan' },
                { id: 2, name: 'John Doe' },
                { id: 3, name: 'Jane Smith' }
              ], null, 2)}</pre>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'MongoDB Query',
      code: `const { MongoClient } = require('mongodb');

async function getUsers() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db('portfolio');
    const users = await db.collection('users').find({
      active: true
    }).toArray();
    
    return users;
  } finally {
    await client.close();
  }
}`,
      output: (
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded">
          <div className="font-mono text-sm">
            <div className="text-blue-600 mb-2">MongoDB Query Result:</div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
              <pre>{JSON.stringify([
                { _id: '507f1f77bcf86cd799439011', name: 'Rizwan', active: true },
                { _id: '507f1f77bcf86cd799439012', name: 'Developer', active: true }
              ], null, 2)}</pre>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Live Code Playground</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive code examples showcasing my development skills
          </p>
        </motion.div>

        {/* Example selector */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white dark:bg-gray-800 rounded-lg p-2 border border-black dark:border-white shadow-lg">
            {codeExamples.map((example, index) => (
              <Button
                key={index}
                variant={activeExample === index ? "default" : "ghost"}
                onClick={() => setActiveExample(index)}
                className={`px-4 py-2 transition-all duration-300 ${
                  activeExample === index 
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg' 
                    : 'hover:bg-muted'
                }`}
              >
                {example.title}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeExample}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Code editor */}
          <Card className="bg-gray-900 text-white border-2 border-black dark:border-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{codeExamples[activeExample].title}</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-white border-white/20">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white/20">
                  <Play className="w-4 h-4 mr-2" />
                  Run
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="text-sm overflow-x-auto">
                <code className="language-javascript">
                  {codeExamples[activeExample].code}
                </code>
              </pre>
            </CardContent>
          </Card>

          {/* Output */}
          <Card className="border-2 border-black dark:border-white bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Live Output</CardTitle>
            </CardHeader>
            <CardContent>
              {codeExamples[activeExample].output}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}