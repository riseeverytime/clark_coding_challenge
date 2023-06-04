import React, { useState, useContext } from 'react';

import { Quiz, Choice, Context } from '../App';

interface QuizPanelProps {
  currentPage: number;
  title: string;
  choices: Choice[];
  type: string;
  onUpdateQuiz: (quiz: Quiz[]) => void;
}

function QuizPanel({
  title,
  choices,
  type,
  currentPage,
  onUpdateQuiz,
}: QuizPanelProps) {
  const [description, setDescription] = useState('');

  const context = useContext(Context);

  function handleChange(selectedValue: number) {
    const temp = [...context.quizzes];
    temp[currentPage - 1].choices!.map((value) => (value.selected = false));
    temp[currentPage - 1].choices![selectedValue].selected = true;
    onUpdateQuiz(temp);
  }

  function descriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }
  return (
    <div
      key={`question-div-${title}`}
      className="flex flex-col items-center rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm text-white animate-in fade-in slide-in-from-right-96 duration-500"
    >
      <div className="text-white text-xl mb-10">{title}</div>
      {type === 'multiple-choice' ? (
        choices.map((value: Choice, index: number) => (
          <div key={value.label + index} className="w-full pl-[5vw]">
            <label className="custom-radio">
              <p className="self-center text-start">{value.label}</p>
              <input
                type="radio"
                name="radio"
                checked={value.selected}
                onChange={() => handleChange(index)}
              />
              <span className="check-mark"></span>
            </label>
          </div>
        ))
      ) : (
        <textarea
          className="w-full bg-transparent border border-white outline-none"
          rows={5}
          value={description}
          onChange={descriptionChange}
        />
      )}
    </div>
  );
}

export default QuizPanel;
