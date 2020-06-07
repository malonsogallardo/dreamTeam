import React from "react";

import { connect } from "react-redux";

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => {
  return (
    <section>
      <h2> Jugadores </h2>
      <div className="contenedor-jugadores">
        {jugadores.map((element) => (
          <article className="jugador" key={element.id}>
            <img src={element.foto} alt={element.nombre}></img>
            <h3>{element.nombre}</h3>
            <div>
              <button onClick={() => agregarTitular(element)}>Titular</button>
              <button onClick={() => agregarSuplente(element)}>Suplente</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    jugadores: state.jugadores,
  };
};

const mapDispatchToProps = (dispatch) => ({
  agregarTitular(jugador) {
    dispatch({
      type: "AGREGAR_TITULAR",
      jugador,
    });
  },

  agregarSuplente(jugador) {
    dispatch({
      type: "AGREGAR_SUPLENTE",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
