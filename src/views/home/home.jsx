import React from "react";
import "./home.css";

const Home = () => {
  return (
    <body>
      {/* <!-- Sección de Encabezado --> */}
      <header>
        <h1>
          Bienvenido a CoMA: Tu Destino para Materiales de Construcción y Empleo
          en la Construcción
        </h1>
        <p>
          Explora, compra y vende materiales de construcción de manera
          conveniente en nuestra plataforma. ¡Únete a la revolución en el
          comercio y la construcción!
        </p>
        <a href="#registro" class="btn-primario">
          Comienza Ahora
        </a>
      </header>

      {/* <!-- Sección de Ventajas Principales --> */}
      <section id="ventajas">
        {/* <!-- Beneficios Clave --> */}
        <div class="ventaja">
          <h2>Variedad de Productos</h2>
          <p>
            Descubre una amplia gama de productos de construcción de alta
            calidad.
          </p>
          <img src="icono-productos.png" alt="Ícono de productos" />
        </div>
        <div class="ventaja">
          <h2>Pago y Envío Seguros</h2>
          <p>
            Garantizamos transacciones seguras y opciones de envío confiables.
          </p>
          <img src="icono-seguridad.png" alt="Ícono de seguridad" />
        </div>
        <div class="ventaja">
          <h2>Conexiones Profesionales</h2>
          <p>
            Conecta con oportunidades laborales en el sector de la construcción.
          </p>
          <img src="icono-construccion.png" alt="Ícono de construcción" />
        </div>
      </section>

      {/* <!-- Otras Secciones (Cómo Funciona, Testimonios, Registro, Preguntas Frecuentes, Contacto, Descarga de la Aplicación Móvil, Redes Sociales, Pie de Página) --> */}
      <script src="slider.js"></script>
    </body>
  );
};

export default Home;
