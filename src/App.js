// src/App.js
import React from 'react'
import './App.css'
import Chart from './components/Chart'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-head">Charting Library</h1>
      </header>
      <div className="App-content">
        <Chart />
      </div>
    </div>
  )
}

export default App
