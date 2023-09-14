import "./footer.css";
import facebook from "../../media/facebook.svg";
import instagram from "../../media/instagram.svg";
import linkedin from "../../media/linkedin.svg";
import twitterx from "../../media/twitterx.svg";
import youtube from "../../media/youtube.svg";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div className="footer-right">
        <a href="#">
          <img src={facebook} />
        </a>
        <a href="#">
          <img src={instagram} />
        </a>
        <a href="#">
          <img src={twitterx} />
        </a>
        <a href="#">
          <img src={linkedin} />
        </a>
        <a href="#">
          <img src={youtube} />
        </a>
      </div>

      <div class="footer-left">
        <p class="footer-links">
          <a class="link-1" href="#">
            Servicios
          </a>

          <a href="#">Eventos</a>

          <a href="#">Contactos</a>
        </p>
        <p>coMA &copy; 2015</p>
      </div>
    </footer>
  );
};
export default Footer;
