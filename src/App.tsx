import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './routes/Landing';
import './App.css';


function App() {
  return (
    <main className="App">
      <BrowserRouter >
      <Routes>
        <Route path='/' element={<Landing /> }/>
      </Routes>
      </BrowserRouter>

    </main>
  );
}

export default App;
