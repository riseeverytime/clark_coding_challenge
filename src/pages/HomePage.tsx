import React from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { Quiz } from '../App';
import AllQuiz from '../questionnaire.json';

interface HomePageProps {
  onUpdatePage: (page: number) => void;
  onUpdateQuiz: (quizzes: Quiz[]) => void;
}
const HomePage = ({ onUpdatePage, onUpdateQuiz }: HomePageProps) => {
  const navigate = useNavigate();

  const handleStart = () => {
    const result = _.shuffle(AllQuiz.questionnaire.questions)
      .slice(0, 10)
      .map((value) => ({
        type: value.question_type,
        headline: value.headline,
        choices: value.choices,
      }));

    onUpdatePage(1);
    onUpdateQuiz(result);
    navigate('/quiz/5');
  };
  return (
    <div className="flex flex-col items-center rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm first-style text-white relative animate-in fade-in zoom-in duration-500">
      <p className="text-lg">CAN YOU SCORE 100% ?</p>
      <p className="text-style font-bold">Welcome to the Questionnaire!</p>
      <p className="text-2xl pb-8">You will be presented with 10 questions.</p>
      <button
        className="text-xl px-10 inline-block rounded border-2 pb-[6px] pt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out 
        hover:bg-blue-600 hover:border-primary-700 active:bg-blue-700"
        data-te-ripple-init
        onClick={handleStart}
      >
        B e g i n
      </button>
    </div>
  );
};

export default HomePage;
