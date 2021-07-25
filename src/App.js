import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Speakers from './components/Speakers';
import PlaceTime from './components/PlaceTime';
import RegisterOrator from './components/RegisterOrator';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Speakers></Speakers>
      <PlaceTime></PlaceTime>
      <RegisterOrator></RegisterOrator>
      <Footer></Footer>
      <Modal></Modal>    
    </BrowserRouter>
  );
}

export default App;
