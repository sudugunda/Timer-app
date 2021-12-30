import React, { useState } from 'react'
import './App.css'

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
    console.log(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div className='app'>
      <h1>{ ctime }</h1>
    </div>
  )
}

export default App
