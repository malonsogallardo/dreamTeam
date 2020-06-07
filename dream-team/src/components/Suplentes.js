import React from "react";

import { connect } from "react-redux";

const Suplentes = ({ suplentes, quitarSuplente }) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="suplentes">
        {suplentes.map((element) => (
          <article className="suplente" key={element.id}>
            <div>
              <img src={element.foto} alt={element.nombre}></img>
              <button onClick={() => quitarSuplente(element)}>X</button>
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
    suplentes: state.suplentes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  quitarSuplente(jugador) {
    dispatch({
      type: "QUITAR_SUPLENTE",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
