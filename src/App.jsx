// src/App.jsx
import React from 'react';
import ThreeScene from './ThreeScene';

const App = () => {
  return (
    <div className='flex px-10 py-10 flex-col items-center text-center' style={{ height: '100vh', width: '100vw' }}>
      <h2 className='text-center pb-5 text-xl font-bold'>Hello my Name is Andrew Evans</h2>
      <p className='pb-20'>I am a engineer that likes to cad and do gym and stuff and blah blah blah, check out my cad</p>
      <div className="display w-96 h-56 bg-zinc-400 border-4 border-orange-200">
        <h3 className='text-black font-bold pt-2'>Rocket Thruster</h3>
        <ThreeScene />
      </div>
    </div>
  );
};

export default App;
