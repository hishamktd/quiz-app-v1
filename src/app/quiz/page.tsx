"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useQuizStore } from "@/lib/store";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Temporary mock data until we connect to the database
const mockQuestion = {
  id: "1",
  text: "What is the capital of France?",
  options: [
    { id: "1", text: "London" },
    { id: "2", text: "Paris" },
    { id: "3", text: "Berlin" },
    { id: "4", text: "Madrid" },
  ],
};

export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState(false);
  const { currentQuestionIndex, setCurrentQuestionIndex } = useQuizStore();

  const handleSubmit = () => {
    if (!selectedOption) return;

    setIsAnswered(true);
    // In the real implementation, we'll send this to the server
    setTimeout(() => {
      setIsAnswered(false);
      setSelectedOption("");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16">
      <motion.div
        className="container max-w-4xl mx-auto px-4"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={item}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Question {currentQuestionIndex + 1}</span>
                <span className="text-sm text-muted-foreground">
                  Progress: 1/10
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl mb-8">{mockQuestion.text}</p>
              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
              >
                <div className="space-y-4">
                  {mockQuestion.options.map((option) => (
                    <motion.div
                      key={option.id}
                      variants={item}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Label
                        htmlFor={option.id}
                        className="flex items-center space-x-2 p-4 rounded-lg border-2 cursor-pointer hover:bg-secondary/50 transition-colors"
                      >
                        <RadioGroupItem value={option.id} id={option.id} />
                        <span className="text-lg">{option.text}</span>
                      </Label>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="flex justify-end">
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={!selectedOption || isAnswered}
            className="w-full md:w-auto"
          >
            {isAnswered ? "Next Question..." : "Submit Answer"}
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
