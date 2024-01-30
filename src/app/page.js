"use client"
import { Warning } from 'postcss';
import { useState } from 'react'

export default function Home() {
  const [counter, setcounter] = useState(0);
  function add() {
    if (counter < 10) {
      setcounter(counter + 1);
    }
  }
  function sub() {
    if (counter > 0) {
      setcounter(counter - 1);
    }
    else {
      setcounter(0);
    }

    if (counter < 0) {
    <div className='bg-green-600 h-12 w-36'>  
      Warning("You have not value to subtract");
      </div>
    }
    
  }
  function res() {
    setcounter(0);
  }

  function addi() {
    setcounter(counter + 1);
  }

  return (
    <div className='bg-blue-300 min-h-screen flex flex-col items-center justify-center font-bold '>

      <h1 className='text-4xl'>Welcome to The counter By Arslan</h1>
      <h1 className='text-4xl'>Counter Program</h1>
      <br />
      <h1 className='text-2xl'>
        <p className='bg-orange-500 rounded-md p-4'>Counter Value is: {counter}</p></h1>
      <br />

      <div className='bg-red-700 rounded-md p-5'><button className='bg-blue-600 rounded-md pl-4 pr-4 py-2' onClick={add}>Add +1 only 11 times</button>
        <button className='ml-2 bg-blue-600 rounded-md pl-4 pr-4 py-2' onClick={sub}>Subtract -1</button>
        <button className='ml-2 bg-blue-600 rounded-md pl-4 pr-4 py-2' onClick={res}>Reset 0</button>
        <button className='ml-2 bg-blue-600 rounded-md pl-4 pr-4 py-2' onClick={addi}>Continue Counter +1</button>
      </div>

    </div>
  )
}

