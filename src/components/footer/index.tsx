import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faExternalLinkSquare,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="section__footer">
      <div className="row__footer">
        <Link className="mainApp__link" to="/">
          <FontAwesomeIcon className="app__icon" icon={faBolt} /> arDB
        </Link>
        <div className="container__socials">
          <a
            className="socials__link"
            href="https://github.com/danjkim21/adv-nuclear-reactor-api-v2"
          >
            <FontAwesomeIcon className="socials__icon" icon={faGithubSquare} />
          </a>
          <a
            className="socials__link"
            href="https://www.linkedin.com/in/danieljayyoungkim/"
          >
            <FontAwesomeIcon className="socials__icon" icon={faLinkedin} />
          </a>
          <a className="socials__link" href="https://twitter.com/devdanielk">
            <FontAwesomeIcon className="socials__icon" icon={faTwitterSquare} />
          </a>
          <a className="socials__link" href="https://daniel-jkim.com/">
            <FontAwesomeIcon
              className="socials__icon"
              icon={faExternalLinkSquare}
            />
          </a>
        </div>
      </div>
      <div className="row__small">
        <small className="small">© 2022 arDB | Daniel Jay-Young Kim</small>
      </div>
    </footer>
  );
}

export default Footer;
