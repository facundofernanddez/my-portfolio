import profile from "../images/profile.jpg";
let aboutMe = `Desde mis comienzos en la programacion`;

export const HomeCard = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={profile}
              className="img-fluid rounded-start profile-img"
              alt="profile-img"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">Sobre mi</h5>
              <p className="card-text">{aboutMe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IndividualProyectCard = () => {
  return (
    <div className="card mt-3">
      <img src="" class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export const ProjectsCard = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Proyectos</h5>
        </div>
        <IndividualProyectCard />
        <IndividualProyectCard />
        <IndividualProyectCard />
      </div>
    </div>
  );
};

export const ContactCard = () => {
  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label className="form-label text-light">Email address</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Example textarea</label>
        <textarea className="form-control" rows="3" />
      </div>
      <button type="submit" className="btn btn-outline-success text-light mb-3">
        Enviar
      </button>
    </div>
  );
};
