import "./navBar.css";
import conectando from "../../media/conectando.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div class="header-fixed">
      <img src={conectando} alt="Texto Alternativo" class="logo" />
      <div class="header-links">
        <Link to="/contacto">
          <a>Contacto</a>
        </Link>
        <a href="#eventos">Eventos</a>
        <a href="#servicios">Servicios</a>
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
