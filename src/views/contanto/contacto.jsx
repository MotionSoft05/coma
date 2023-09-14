const Contacto = () => {
  return (
    <section class="contact-section">
      <h2>¡Hola! ¿En qué te podemos ayudar?</h2>
      <form action="#" method="post">
        <label class="contact-label" for="nombre">
          Nombre:
        </label>
        <input
          class="contact-input"
          type="text"
          id="nombre"
          name="nombre"
          required
        />

        <label class="contact-label" for="email">
          Correo Electrónico:
        </label>
        <input
          class="contact-input"
          type="email"
          id="email"
          name="email"
          required
        />

        <label class="contact-label" for="comentario">
          Comentario:
        </label>
        <textarea
          class="contact-textarea"
          id="comentario"
          name="comentario"
          rows="4"
          required
        ></textarea>

        <input class="contact-submit" type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default Contacto;
