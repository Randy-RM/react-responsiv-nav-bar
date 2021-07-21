import "./header.css";
import Logo from "./ps-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPlus,
  faSearch,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

let Header = () => {
  return (
    <>
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label for="show-menu" className="menu-icon">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <div className="content">
            <div className="logo">
              <a href="#">
                <img src={Logo} alt="logo" width="60" />
              </a>
            </div>
            <ul className="links">
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#" className="desktop-link">
                  Actualités&nbsp;
                  <FontAwesomeIcon icon={faPlus} />
                </a>
                <input type="checkbox" id="show-actualites" />
                <label for="show-actualites">
                  Actualités&nbsp;
                  <FontAwesomeIcon icon={faPlus} />
                </label>
                <ul>
                  <li>
                    <a href="#">Conservation</a>
                  </li>
                  <li>
                    <a href="#">Santé</a>
                  </li>
                  <li>
                    <a href="#">Foret</a>
                  </li>
                  <li>
                    <a href="#">Environnement</a>
                  </li>
                  <li>
                    <a href="#">Climat</a>
                  </li>
                  <li>
                    <a href="#">Biodiversité</a>
                  </li>
                  <li>
                    <a href="#">Energie</a>
                  </li>
                  <li>
                    <a href="#">Pollution</a>
                  </li>
                  <li>
                    <a href="#">Dossiers</a>
                  </li>
                  <li>
                    <a href="#">Opportunités</a>
                  </li>
                  <li>
                    <a href="#">Autres</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">A propos de nous</a>
              </li>
              <li>
                <a href="#" className="desktop-link">
                  Nos services&nbsp;
                  <FontAwesomeIcon icon={faPlus} />
                </a>
                <input type="checkbox" id="show-services" />
                <label for="show-services">
                  Nos services&nbsp;
                  <FontAwesomeIcon icon={faPlus} />
                </label>
                <ul>
                  <li>
                    <a href="#">Rédaction</a>
                  </li>
                  <li>
                    <a href="#">Infographie</a>
                  </li>
                  <li>
                    <a href="#">Environews TV</a>
                  </li>
                  <li>
                    <a href="#" className="desktop-link">
                      Production <br /> audiovisuelle&nbsp;
                      <FontAwesomeIcon icon={faPlus} />
                    </a>
                    <input type="checkbox" id="show-items" />
                    <label for="show-items">
                      Production <br /> audiovisuelle&nbsp;
                      <FontAwesomeIcon icon={faPlus} />
                    </label>
                    <ul>
                      <li>
                        <a href="#">Documentaire</a>
                      </li>
                      <li>
                        <a href="#">Emision</a>
                      </li>
                      <li>
                        <a href="#">Motion design</a>
                      </li>
                      <li>
                        <a href="#">Spot publicitaire</a>
                      </li>
                      <li>
                        <a href="#">Gros plan</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Nous contacter</a>
              </li>
            </ul>
          </div>
          <label for="show-search" className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <form action="#" className="search-box">
            <input
              type="text"
              placeholder="Entrez votre recherche..."
              required
            />
            <button type="submit" className="go-icon">
              Rechercher
            </button>
          </form>
        </nav>
      </div>
    </>
  );
};

export default Header;
