import { useState, useEffect } from "react";
import "./navigation.styles.scss";
import "animate.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    if (window.innerWidth > 992) {
      setScroll("bg-transparent");
      window.addEventListener("scroll", () => {
        window.scrollY > 200
          ? setScroll("animate__animated animate__fadeInDown")
          : setScroll("animate__animated animate__fadeInUp bg-transparent");
      });
    } else {
      setScroll("");
    }
    return;
  }, []);

  return (
    <header
      className={`navigation fw-bold text-light bg-dark fixed-top
      ${scroll}`}
      id="main-nav"
    >
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 text-secondary text-white">
            PROBIR
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <span className="nav-a active">HOME</span>
              <span className="nav-a" href="#">
                FEATURES
              </span>
              <span className="nav-a" href="#">
                PRICING
              </span>
              <span className="nav-a disabled">DISABLED</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
