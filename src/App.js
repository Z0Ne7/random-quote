import React from 'react';

function App() {
  return (
    <div className='flex justify-center items-center font-sans h-screen bg-green-300'>
      <div className='relative rounded w-128 py-10 px-12 table bg-white'>
        <div className='text-center w-128 h-auto clear-both font-medium text-3xl text-green-500'>
          <i></i>
          <span>Life is what we make it, always has been, always will be.</span>
        </div>
        <div className='w-128 h-auto clear-both pt-5 text-base text-right text-green-500'>
          <span>- Grandma Moses</span>
        </div>
        <div>
          <a href='#/'>Twitter</a>
          <a href='#/'>Facebook</a>
          <button className='float-right h-9 rounded text-white bg-green-500 outline-none px-3 py-1 mt-4'>New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
