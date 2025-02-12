"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, PlusCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          variants={item}
        >
          Welcome to QuizMaster
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={item}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <PlusCircle className="h-7 w-7" />
                  Contribute Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-lg text-muted-foreground">
                  Share your knowledge by contributing questions to our quiz
                  database.
                </p>
                <Link href="/contribute" className="block">
                  <Button className="w-full text-lg py-6" size="lg">
                    Create Question
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Brain className="h-7 w-7" />
                  Take Quiz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-lg text-muted-foreground">
                  Challenge yourself with questions from various contributors.
                </p>
                <Link href="/quiz" className="block">
                  <Button
                    className="w-full text-lg py-6"
                    size="lg"
                    variant="secondary"
                  >
                    Start Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div className="mt-16 max-w-4xl mx-auto" variants={item}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Your Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="text-center p-6 bg-secondary rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-3xl font-bold mb-2">0</p>
                  <p className="text-sm text-muted-foreground">
                    Questions Contributed
                  </p>
                </motion.div>
                <motion.div
                  className="text-center p-6 bg-secondary rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-3xl font-bold mb-2">0</p>
                  <p className="text-sm text-muted-foreground">
                    Questions Answered
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </main>
  );
}
