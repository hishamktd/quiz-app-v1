import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
}

interface QuizStore {
  user: User | null;
  setUser: (user: User | null) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
}));
