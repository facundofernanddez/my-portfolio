import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark nav">
      <div className="container">
        <h5 className="navbar-brand">Alejandro Facundo Fernández</h5>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav list-dark ms-auto mt-2 mt-lg-0">
            <li className="m-2">
              <a className="btn btn-outline-light">Sobre mi</a>
            </li>
            <li className="m-2 text-light">
              <a className="btn btn-outline-light">Proyectos</a>
            </li>
            <li className="m-2 text-light">
              <a className="btn btn-outline-light">¡Contáctame!</a>
            </li>
            <li className="m-2 text-light">
              <a
                href="https://www.linkedin.com/in/facundofernanddez/"
                target="_blank"
                className="btn btn-outline-light"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="m-2 text-light">
              <a
                href="https://github.com/facundofernanddez"
                target="_blank"
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
