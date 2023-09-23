import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './routes/Landing';
import SupermarketInfo from './routes/SupermarketInfo';
import './App.css';

function App() {
  return (
    <main className="App">
      <BrowserRouter >
      <Routes>
        <Route path='/' element={<Landing /> }/>
        <Route path='/supermarket-info/:supermarket' element={<SupermarketInfo /> }/>
      </Routes>
      </BrowserRouter>

    </main>
  );
}

export default App;
