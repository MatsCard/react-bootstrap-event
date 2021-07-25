import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Speakers from './components/Speakers';
import PlaceTime from './components/PlaceTime';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Speakers></Speakers>
      <PlaceTime></PlaceTime>
    </BrowserRouter>
  );
}

export default App;
