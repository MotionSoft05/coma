import "./navBar.css";
import conectando from "../../media/conectando.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="header-fixed">
      <img src={conectando} className="logo" />
      <div className="header-links">
        <Link to="/contacto">
          <a>Contacto</a>
        </Link>
        <a href="#eventos">Eventos</a>
        <a href="#servicios">Servicios</a>
      </div>
      <div className="login-links">
        <a href="#inicio-sesion" className="login-link">
          Iniciar Sesión
        </a>
        <a href="#registro" className="login-link">
          Registrarse
        </a>
      </div>
    </div>
  );
};

export default NavBar;
