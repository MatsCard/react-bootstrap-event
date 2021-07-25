import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Speakers from './components/Speakers';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Speakers></Speakers>
    </BrowserRouter>
  );
}

export default App;
