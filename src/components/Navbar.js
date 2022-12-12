import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <h5 className="navbar-brand">Alejandro Facundo Fernández</h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#barrita"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="barrita" className="collapse navbar-collapse">
          <ul className="nav ms-auto mt-lg-0">
            <li className="nav-item m-2 text-light">
              <a className="btn btn-outline-light" href="#sobre-mi">
                Sobre mi
              </a>
            </li>
            <li className="nav-item m-2 text-light">
              <a className="btn btn-outline-light" href="#projects">
                Proyectos
              </a>
            </li>
            <li className="nav-item m-2 text-light">
              <a className="btn btn-outline-light" href="#contact">
                ¡Contáctame!
              </a>
            </li>
            <li className="nav-item m-2 text-light">
              <a
                href="https://www.linkedin.com/in/facundofernanddez/"
                target={
                  ("https://www.linkedin.com/in/facundofernanddez/", "_blank")
                }
                className="btn btn-outline-light"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="nav-item m-2 text-light">
              <a
                href="https://github.com/facundofernanddez"
                target={("https://github.com/facundofernanddez", "_blank")}
                className="btn btn-outline-light"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
