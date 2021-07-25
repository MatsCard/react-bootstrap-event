import React from 'react';
import sacha from '../assets/speakers/sacha.jpg';
import leonidas from '../assets/speakers/leonidas2.jpeg';
import freddy from '../assets/speakers/freddy.jpeg';
import vander from '../assets/speakers/cvander.jpeg';



function Speakers(props) {

  return (
    <section id="speakers" className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col text-center text-uppercase">
              <small>Conoce a los</small>
              <h2>Oradores</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={sacha} alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges mb-1 text-right">
                  <span className="badge badge-warning">Javascript</span>
                  <span className="badge badge-info">React</span>
                </div>
                <h5 className="card-title">Sacha Lifszyc</h5>
                <p className="card-text">Pellentesque ultricies massa lectus, nec posuere tortor dapibus eu. Morbi molestie nulla ligula, in sodales nulla tincidunt ut. Ut convallis et nunc et venenatis. </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={leonidas} alt="Foto de Leonidas" />
              <div className="card-body">
                <div className="badges mb-1 text-right">
                  <span className="badge badge-warning">Javascript</span>
                  <span className="badge badge-info">React</span>
                </div>
                <h5 className="card-title mb-0">Leonidas Esteban</h5>
                <p className="card-text">Pellentesque ultricies massa lectus, nec posuere tortor dapibus eu. Morbi molestie nulla ligula, in sodales nulla tincidunt ut. Ut convallis et nunc et venenatis. </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={freddy} alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges mb-1 text-right">
                  <span className="badge badge-warning">Javascript</span>
                  <span className="badge badge-info">React</span>
                </div>
                <h5 className="card-title mb-0">Freddy Vega</h5>
                <p className="card-text">Pellentesque ultricies massa lectus, nec posuere tortor dapibus eu. Morbi molestie nulla ligula, in sodales nulla tincidunt ut. Ut convallis et nunc et venenatis. </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={vander} alt="Foto de Christian" />
              <div className="card-body">
                <div className="badges mb-1 text-right">
                  <span className="badge badge-warning">Javascript</span>
                  <span className="badge badge-info">React</span>
                </div>
                <h5 className="card-title mb-0">Christian Van Der H.</h5>
                <p className="card-text">Pellentesque ultricies massa lectus, nec posuere tortor dapibus eu. Morbi molestie nulla ligula, in sodales nulla tincidunt ut. Ut convallis et nunc et venenatis. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;