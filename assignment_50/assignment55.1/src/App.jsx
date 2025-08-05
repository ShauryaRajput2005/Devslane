import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table.jsx'


function App() {
  return (
    <div className='flex gap-5 p-4'>
      <Table/>
      <Table/>
    </div>
  );
}

export default App
