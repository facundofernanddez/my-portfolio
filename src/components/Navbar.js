import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark nav">
      <div className="container">
        <a className="navbar-brand" href="#">
          Facundo Fernández
        </a>
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
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav list-dark ms-auto mt-2 mt-lg-0">
            <li className="m-2">¡Contáctame!</li>
            <li>
              <i class="bi bi-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};