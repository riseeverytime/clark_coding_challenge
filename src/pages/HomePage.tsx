import React from 'react'

function HomePage() {
  function goNext() {}
  return (
    <div className='flex flex-col items-center rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm first-style text-white'>
      <p className='text-lg'>CAN YOU SCORE 100% ?</p>
      <p className='text-style font-bold'>Welcome to the Trivia Challenge!</p>
      <p className='text-2xl pb-8'>You will be presented with 10 questions.</p>
      <button
        className='text-xl px-10 inline-block rounded border-2 pb-[6px] pt-2 font-medium uppercase leading-normal transition duration-150 ease-in-out 
        hover:bg-blue-600 hover:border-primary-700 active:bg-blue-700'
        data-te-ripple-init
        onClick={goNext}
      >
        B e g i n
      </button>
    </div>
  )
}

export default HomePage
