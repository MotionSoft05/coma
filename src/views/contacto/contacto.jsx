import React from "react";
import "./contacto.css"; // Asegúrate de especificar la ruta correcta al archivo CSS

const Contacto = () => {
  return (
    <div className="contacto-container">
      {" "}
      {/* Agregamos un contenedor */}
      <section className="contact-section">
        <h2>¡Hola! ¿En qué te podemos ayudar?</h2>
        <form action="#" method="post">
          <label className="contact-label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            className="contact-input"
            type="text"
            id="nombre"
            name="nombre"
            required
          />

          <label className="contact-label" htmlFor="email">
            Correo Electrónico:
          </label>
          <input
            className="contact-input"
            type="email"
            id="email"
            name="email"
            required
          />

          <label className="contact-label" htmlFor="comentario">
            Comentario:
          </label>
          <textarea
            className="contact-textarea"
            id="comentario"
            name="comentario"
            rows="4"
            required
          ></textarea>

          <input className="contact-submit" type="submit" value="Enviar" />
        </form>
      </section>
    </div>
  );
};

export default Contacto;
