import React from 'react';
import platziLogo from '../assets/images/platzi-logo.png';
import './styles/Header.css';


function Header(props) {

  return (
    <header id="header" className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={platziLogo} alt="Platzi"/>
            
            Conf Hawaii
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#main"><span>La conferencia</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#speakers">Los oradores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#place-time">El lugar y la fecha</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#conviertete-en-orador">Conviertete en orador</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-platzi" href="#" data-toggle="modal" data-target="#modalCompra">Comprar tickets</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
  );
}

export default Header;