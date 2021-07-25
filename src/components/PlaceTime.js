import React from 'react';
import './styles/PlaceTime.css';
import honolulu from '../assets/images/honolulu.jpg';


function PlaceTime(props) {

  return (
      
    <section id="place-time">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 px-0">
          <img src={honolulu} alt="Ciudad de Honolulu"/>
        </div>
        <div className="col-12 col-lg-6 mt-2 py-4">
          <h2>Honolulu - Octubre 2025</h2>
          <p>Honolulu u Honolulú​ es la capital y localidad más grande del estado de Hawái, en los Estados Unidos.​ Honolulu es la más sureña de entre las principales ciudades estadounidenses. Aunque el nombre de Honolulu se refiere al área urbana en la costa sureste de la isla de Oahu, la ciudad y el condado de Honolulu han formado una ciudad-condado consolidada que cubre toda la isla (aproximadamente 600 km² de superficie).</p>
          <a href="https://es.wikipedia.org/wiki/Honolulu" className="btn btn-outline-light">Conoce mas</a>
        </div>
      </div>
    </div>
  </section>
  );
}

export default PlaceTime;