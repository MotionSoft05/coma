import "./navBar.css";
import conectando from "../../media/conectando.png";
const NavBar = () => {
  return (
    <div class="header-fixed">
      <img src={conectando} alt="Texto Alternativo" class="logo" />
      <div class="header-links">
        <a href="#eventos">Eventos</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div class="login-links">
        <a href="#inicio-sesion" class="login-link">
          Iniciar Sesión
        </a>
        <a href="#registro" class="login-link">
          Registrarse
        </a>
      </div>
    </div>
  );
};

export default NavBar;
