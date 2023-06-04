import React from 'react';

import { useNavigate } from 'react-router-dom';

const FinishPage = () => {
  const navigate = useNavigate();

  return (
    <div className="App animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col items-center rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm text-white">
        <p className="text-style mb-10">
          Congratulations. Do you want to restart?
        </p>
        <button
          className="text-xl px-10 inline-block rounded border-2 pb-[6px] pt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-blue-600 active:bg-blue-700"
          onClick={() => navigate('/')}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default FinishPage;
