"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

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

export default function ContributePage() {
  const [options, setOptions] = useState([
    { id: "1", text: "", isCorrect: false },
    { id: "2", text: "", isCorrect: false },
    { id: "3", text: "", isCorrect: false },
    { id: "4", text: "", isCorrect: false },
  ]);
  const [question, setQuestion] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleOptionChange = (id: string, value: string) => {
    setOptions(
      options.map((opt) => (opt.id === id ? { ...opt, text: value } : opt))
    );
  };

  const handleSubmit = async () => {
    // TODO: Implement submission logic
    console.log({
      question,
      options: options.map((opt) => ({
        ...opt,
        isCorrect: opt.id === correctOption,
      })),
    });
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
          <Card>
            <CardHeader>
              <CardTitle>Contribute a Question</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Enter your question here"
                  className="text-lg"
                />
              </div>

              <div className="space-y-6">
                <Label>Answer Options</Label>
                <RadioGroup
                  value={correctOption}
                  onValueChange={setCorrectOption}
                >
                  {options.map((option, index) => (
                    <motion.div
                      key={option.id}
                      variants={item}
                      className="flex items-center space-x-4"
                    >
                      <RadioGroupItem
                        value={option.id}
                        id={`option-${option.id}`}
                      />
                      <Input
                        value={option.text}
                        onChange={(e) =>
                          handleOptionChange(option.id, e.target.value)
                        }
                        placeholder={`Option ${index + 1}`}
                        className="flex-1"
                      />
                    </motion.div>
                  ))}
                </RadioGroup>
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full"
                size="lg"
                disabled={
                  !question ||
                  !correctOption ||
                  options.some((opt) => !opt.text)
                }
              >
                Submit Question
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </main>
  );
}
