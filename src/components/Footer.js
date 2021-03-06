import React from 'react';
import './styles/Footer.css';

function Footer(props) {

  return (
    <footer id="footer" className="pb-4 pt-4">
    <div className="container">
      <div className="row text-center">
        <div className="col-12 col-lg">
          <a href="#">Preguntas frecuentes</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Contactanos</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Prensa</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Conferencias</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Terminos y condiciones</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Privacidad</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Estudiantes</a>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;