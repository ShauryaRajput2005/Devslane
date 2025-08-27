import { useState } from 'react';
import './App.css';
import Header from './Header';
import HTracker from './HTracker';
import STracker from './STracker';
import HappyInc from './HappyInc';
import SadInc from './SadInc';
import { MdMood } from "react-icons/md";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen text-black gap-5 p-4 bg-gray-300">

        <div><HTracker /> <HappyInc /></div>
        <div><STracker /> <SadInc /></div>

      </div >
    </div>
  );
}

export default App;
