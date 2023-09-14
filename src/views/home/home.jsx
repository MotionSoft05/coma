import React, { useEffect, useRef } from "react";
import "./home.css";
import slider1 from "../../media/slider1.png";
import slider2 from "../../media/slider2.png";
import slider3 from "../../media/slider3.png";

const Home = () => {
  const slides = useRef([]);
  let currentSlide = 0;

  useEffect(() => {
    // Función para mostrar el slider
    function showSlide(slideIndex) {
      if (slides.current.length === 0) {
        return; // Salir si no hay slides disponibles
      }
      slides.current[currentSlide].style.display = "none";
      slides.current[slideIndex].style.display = "block";
      currentSlide = slideIndex;
    }

    // Función para avanzar al siguiente slide
    function nextSlide() {
      const nextIndex = (currentSlide + 1) % slides.current.length;
      showSlide(nextIndex);
    }

    // Iniciar el slider cuando los elementos estén en el DOM
    slides.current = document.querySelectorAll(".slide");
    showSlide(currentSlide);
    const intervalId = setInterval(nextSlide, 10000); // Cambia de slide cada 10 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <body>
      {/* <!-- Sección de Encabezado --> */}
      <div id="slider">
        {/* <!-- Slider 1 --> */}
        <div class="slide">
          <div class="content">
            <div class="text">
              <header>
                <h1>CoMA: Tu Fuente de Materiales de Construcción y Empleo</h1>
                <p>
                  Explora, compra y vende materiales de construcción de manera
                  conveniente. ¡Únete a la revolución en el comercio y la
                  construcción!
                </p>
                <a href="#registro" class="btn-primario">
                  Comienza Ahora
                </a>
              </header>
            </div>
            <div class="image">
              {/* <!-- Agrega aquí la imagen correspondiente al Slider 1 --> */}
              <img src={slider1} alt="Slider 1" />
            </div>
          </div>
        </div>
        {/* <!-- Slider 2 --> */}
        <div class="slide">
          <div class="content">
            <div class="text">
              <header>
                <h1>Descubre Nuestras Ofertas Especiales</h1>
                <p>
                  ¡Aprovecha nuestras promociones exclusivas en materiales de
                  construcción de alta calidad!
                </p>
                <a href="#registro" class="btn-primario">
                  Ver Ofertas
                </a>
              </header>
            </div>
            <div class="image">
              {/* <!-- Agrega aquí la imagen correspondiente al Slider 1 --> */}
              <img src={slider2} alt="Slider 2" />
            </div>
          </div>
        </div>
        {/* <!-- Slider 3 --> */}
        <div class="slide">
          <div class="content">
            <div class="text">
              <header>
                <h1>Regístrate y Encuentra Empleo en la Construcción</h1>
                <p>
                  Conéctate con empleadores en busca de profesionales de la
                  construcción y encuentra tu próximo trabajo.
                </p>
                <a href="#registro" class="btn-primario">
                  Buscar Empleo
                </a>
              </header>
            </div>
            <div class="image">
              {/* <!-- Agrega aquí la imagen correspondiente al Slider 1 --> */}
              <img src={slider3} alt="Slider 3" />
            </div>
          </div>
        </div>
      </div>

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
