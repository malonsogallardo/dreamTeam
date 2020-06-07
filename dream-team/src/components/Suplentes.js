import React from "react";

import { connect } from "react-redux";

const Suplentes = ({ suplentes }) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="suplentes">
        {suplentes.map((element) => (
          <article className="suplente" key={element.id}>
            <div>
              <img src={element.foto} alt={element.nombre}></img>
              <button>X</button>
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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
