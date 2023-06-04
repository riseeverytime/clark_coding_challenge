/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context, Quiz, Choice } from '../App';
import QuizPanel from '../components/QuizPanel';

interface QuizPageProps {
  onUpdatePage: (page: number) => void;
  onUpdateQuiz: (quiz: Quiz[]) => void;
}

const initialChoice: Choice[] = [
  {
    label: '',
    value: '',
    selected: false,
  },
];
const QuizPage = ({ onUpdatePage, onUpdateQuiz }: QuizPageProps) => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [current, setCurrent] = useState(1);
  const [choices, setChoices] = useState(initialChoice);
  const context = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(context.quizzes[0].headline!);
    context.quizzes[0].choices && setChoices(context.quizzes[0].choices);
    setType(context.quizzes[0].type!);
  }, []);

  useEffect(() => {
    setTitle(context.quizzes[current - 1].headline!);
    if (context.quizzes[current - 1].choices) {
      setChoices(context.quizzes[current - 1].choices!);
    }
    setType(context.quizzes[current - 1].type!);

    onUpdatePage(current);
    navigate(`/quiz/${current}`);
  }, [current]);

  const goPrev = () => {
    if (current > 1) {
      setCurrent(() => current - 1);
    }
  };

  const goNext = () => {
    if (context.page < 10) {
      setCurrent((current) => current + 1);
    } else {
      navigate('/finish');
    }
  };

  return (
    <div className="App">
      <div className="flex flex-col text-white w-[calc(800px-8vw)]">
        <QuizPanel
          onUpdateQuiz={onUpdateQuiz}
          title={title}
          choices={choices}
          type={type}
          currentPage={current}
        />
        <div className="flex gap-10 justify-center mt-10 relative z-10 animate-in fade-in slide-in-from-bottom-96 duration-500">
          <button
            className="text-xl px-10 inline-block rounded border-2 pb-[6px] pt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-blue-600 active:bg-blue-700"
            onClick={goPrev}
          >
            P r e v
          </button>
          <button
            className="text-xl px-10 inline-block rounded border-2 pb-[6px] pt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-blue-600 active:bg-blue-700"
            onClick={goNext}
          >
            {context.page === 10 ? 'Finish' : 'N e x t'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
