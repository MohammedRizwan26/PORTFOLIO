"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RizwanBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Rizwan Bot 🤖 Ask me about Rizwan!" }
  ]);
  const [inputText, setInputText] = useState('');

  const responses = {
    'who are you': "I'm Rizwan, a passionate final-year CS student 👨‍💻",
    'where did you study': "Dhaanish Ahmed College of Engineering 🎓",
    'what is your latest project': "Working on an AI-based final‑year project & hackathon 🚀",
    'what are your skills': "I specialize in React, Node.js, MongoDB, JavaScript, and Express.js 💻",
    'where are you from': "I'm from Chennai, India 📍",
    'how many internships': "I've completed 3+ internships and I'm AI certified! 🏆",
    'default': "That's a great question! Feel free to ask about my education, projects, skills, or background 😊"
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = { type: 'user', text: inputText };
    const lowerInput = inputText.toLowerCase();
    
    let botResponse = responses.default;
    for (const [key, response] of Object.entries(responses)) {
      if (key !== 'default' && lowerInput.includes(key)) {
        botResponse = response;
        break;
      }
    }

    setMessages(prev => [...prev, userMessage, { type: 'bot', text: botResponse }]);
    setInputText('');
  };

  return (
    <>
      {/* Chat widget button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-lg"
          style={{ display: isOpen ? 'none' : 'flex' }}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className="shadow-2xl border-2 border-black dark:border-white">
              <CardHeader className="bg-black text-white dark:bg-white dark:text-black rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Rizwan Bot 🤖</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-gray-700 dark:text-black dark:hover:bg-gray-200"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-3">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-black text-white dark:bg-white dark:text-black rounded-br-none'
                            : 'bg-gray-100 dark:bg-gray-800 rounded-bl-none'
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask me anything..."
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="sm">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}