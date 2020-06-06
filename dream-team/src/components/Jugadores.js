import React from "react";

import { connect } from "react-redux";

const Jugadores = ({ jugadores }) => {
  return (
    <section>
      <h2> Jugadores </h2>
      <div className="contenedor-jugadores">
        {jugadores.map((element) => (
          <article className="jugador">
            <img src={element.foto} alt={element.nombre}></img>
            <h3>{element.nombre}</h3>
            <div>
              <button>Titular</button>
              <button>Suplente</button>
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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
