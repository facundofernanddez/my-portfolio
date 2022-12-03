import profile from "../images/profile.jpg";
import {
  SiJava,
  SiSpring,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiSpringsecurity,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
} from "react-icons/si";
let aboutMe = `Desde mis comienzos en la programacion sentí mucha atracción y empecé de manera autodidacta aprendiendo lo básico y armando proyectos simples. Después de un tiempo empecé mi carrera como desarrollador Full-Stack en Egg Cooperation Bootcamp, en donde por 9 meses intensos aprendí diferentes tecnologías y realicé algunos proyectos con buenos resultados. Sigo con la mirada puesta en el crecimiento tanto personal como profesional, aprender nuevas tecnologías, perfeccionarme en las ya aprendidas y aplicarlas tanto en proyectos grupales como individuales.`;

export const HomeCard = () => {
  let arrIcon = [
    <SiJava />,
    <SiSpring />,
    <SiSpringboot />,
    <SiSpringsecurity />,
    <SiGit />,
    <SiGithub />,
    <SiMysql />,
    <SiHtml5 />,
    <SiCss3 />,
    <SiBootstrap />,
    <SiJavascript />,
    <SiReact />,
  ].map((e) => {
    return <p className="btn btn-outline-dark btn-lg fs-4 m-2">{e}</p>;
  });
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={profile}
              className="img-fluid border border-5 rounded m-1"
              alt="profile-img"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title text-center fs-3">Sobre mi</h5>
              <p className="card-text">{aboutMe}</p>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center fs-3">Tecnologías</h5>
                  <h5 className="card-text">{arrIcon}</h5>
                </div>
              </div>
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
          <h5 className="card-title text-center fs-3">Proyectos</h5>
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
