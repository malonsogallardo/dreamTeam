import React from "react";

import { connect } from "react-redux";

const Titulares = ({ titulares, quitarTitular }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulares.map((element) => (
          <article className="titular" key={element.id}>
            <div>
              <img src={element.foto} alt={element.nombre}></img>
              <button onClick={() => quitarTitular(element)}>X</button>
            </div>
            <p>{element.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    titulares: state.titulares,
  };
};

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: "QUITAR_TITULAR",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
