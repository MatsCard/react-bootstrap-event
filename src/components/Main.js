import React from 'react';
import hawaii from '../assets/images/hawaii.jpg';
import hawaii2 from '../assets/images/hawaii2.jpg';
import hawaii3 from '../assets/images/hawaii3.jpeg';
import './styles/Main.css';



function Main(props) {

  return (
    <main id="main">
      <div id="carousel" className="carousel slide" data-ride="carousel" data-pause="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={hawaii} alt="Hawaii 1"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={hawaii2} alt="Hawaii 2"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={hawaii3} alt="Hawaii 3"/>
          </div>
          <div className="overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 offset-md-6 text-center text-md-right">
                  <h1>Platzi Conf Hawaii</h1>
                  <p className="d-none d-md-block">Platzi Conf llega por primera vez Hwaii! Un evento para
                    compartir con nuestra comunidad el conocimiento y experiencia 
                    de los expertos que estan creando el futuro de internet.
                    Ven a conocer a miembros del Team Platzi, a otros
                    estudiantes de Platzi y a los ooradores de primer nivel
                    que tenemos para ti. Te esperamos
                  </p>
                  <a href="#" className="btn btn-outline-light">Quiero ser orador</a>
                  <button type="button" className="btn btn-platzi" data-toggle="modal" data-target="#modalCompra">Comprar tickets</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;