import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import FinishPage from './pages/FinishPage';

import '../src/assets/css/style.css';
import './App.css';

export interface Choice {
  label: string;
  value: string;
  selected: boolean;
}
export interface Quiz {
  type?: string;
  headline?: string;
  choices?: Choice[];
  description?: string;
}

const initial: Quiz = {
  type: '',
  headline: '',
  choices: [],
};

export type ContextType = {
  page: number;
  quizzes: Quiz[];
};

export const Context = createContext({
  page: 1,
  quizzes: [initial],
});

const App = () => {
  const [context, setContext] = useState({ page: 1, quizzes: [initial] });

  const setPage = (page: number) => {
    const temp: ContextType = { ...context };
    temp.page = page;
    setContext(temp);
  };

  const setQuiz = (quiz: Quiz[]) => {
    const temp: ContextType = { ...context };
    temp.quizzes = quiz;
    setContext(temp);
  };

  return (
    <Context.Provider value={context}>
      <div className="flex justify-center">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage onUpdatePage={setPage} onUpdateQuiz={setQuiz} />
              }
            />
            <Route
              path="/quiz/:id"
              element={
                <QuizPage onUpdatePage={setPage} onUpdateQuiz={setQuiz} />
              }
            />
            <Route path="/finish" element={<FinishPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
};

export default App;
