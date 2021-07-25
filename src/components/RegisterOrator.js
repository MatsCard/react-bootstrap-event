import React from 'react';



function RegisterOrator(props) {

  return (
    <section id="conviertete-en-orador" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col text-uppercase text-center">
            <small>Conviertete en un</small>
            <h2>Orador</h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            Anotate como orador para dar una <abbr data-toggle="tooltip" title="Charlas de 5 minutos">charla ignite</abbr>.
            Cuentanos de que quieres hablar
          </div>
        </div>
        <div className="row">
          <div className="col col-md10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
            <form>
              <div className="form-row">
                <div className="form-group col-12 col-md-6">
                  <input type="text" className="form-control" placeholder="Nombre" />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input type="text" className="form-control" placeholder="Apellido" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <textarea name="text" className="form-control form-control-lg" placeholder="Sobre que quieres hablar?"></textarea>
                  <small className="form-text text-muted">
                    Recuerda incluir un titulo para tu charla
                  </small>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <button type="button" className="btn btn-platzi btn-block">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterOrator;