import perfil from "../images/profile.jpg";
import emailjs from "emailjs-com";
import "../styles/card.css";
import { aboutMe_es } from "./Text";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { projectsList } from "./projects";
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
    return <p className="btn btn-outline-dark btn-lg fs-4 m-1">{e}</p>;
  });

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={perfil}
              className="img-fluid border border-5 rounded m-2"
              alt="profile-img"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title text-center fs-3">Sobre mi</h5>
              <p className="card-text fs-5 fw-light">{aboutMe_es}</p>
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
  const projects = projectsList.map((e) => {
    return (
      <>
        <div className="row">
          <div className="col-2">
            <img src={e.img} className="card-img mt-4 img-project " alt="..." />
          </div>
          <div className="col-10">
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.text}</p>
              <a
                target={(e.linkPage, "_blank")}
                href={e.linkPage}
                className="btn btn-success m-1"
              >
                Ir al sitio
              </a>
              <a
                target={(e.linkCode, "_blank")}
                href={e.linkCode}
                className="btn btn-primary"
              >
                Ir al código
              </a>
            </div>
          </div>
        </div>
      </>
    );
  });

  return projects;
};

export const ProjectsCard = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center fs-3">Proyectos</h5>
        </div>
        <IndividualProyectCard />
      </div>
    </div>
  );
};

export const ContactCard = () => {
  const [message, setMessage] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const resetForm = () => {
    reset();
  };

  const sendEmail = (data, e) => {
    console.log(data);
    resetForm();

    emailjs
      .sendForm(
        "service_4wfoi9b",
        "template_qrqfy1t",
        e.target,
        "la0ABiBfzqc5IgF-R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(
            `¡Gracias ${data.name} he recibido tu mensaje! 😁 Te responderé los mas pronto posible`
          );
          resetForm();
        },
        (error) => {
          console.log(error.text);
          setMessage("Lo siento, ha ocurrido un error inesperado");
        }
      );
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className="container mt-5">
          <label htmlFor="email" className="form-label text-light">
            Email
          </label>
          <input
            required
            type="email"
            className="form-control inputContact"
            name="email"
            value={watch("email")}
            {...register("email", {
              required: {
                value: true,
                message: "Debes especificar un email",
              },
            })}
          />
          <span className="text-danger" role="alert">
            {errors?.email?.message}
          </span>
          <div className="mb-1">
            <label htmlFor="name" className="form-label text-light">
              Nombre
            </label>
            <input
              required
              type="text"
              className="form-control inputContact"
              name="name"
              value={watch("name")}
              {...register("name", {
                required: {
                  value: true,
                  message: "Debes especificar un nombre",
                },
              })}
            />
          </div>
          <span className="text-danger" role="alert">
            {errors?.name?.message}
          </span>
          <div className="mb-1">
            <label htmlFor="message" className="form-label text-light">
              Mensaje
            </label>
            <textarea
              required
              className="form-control inputContact"
              rows="5"
              name="message"
              value={watch("message")}
              {...register("message", {
                required: {
                  value: true,
                  message: "Debes especificar un mensaje",
                },
              })}
            />
          </div>
          <span className="text-danger" role="alert">
            {errors?.message?.message}
          </span>
          <p className="text-light mt-2" role="alert">
            {message}
          </p>
          <br />
          <button
            type="submit"
            className="btn btn-outline-success text-light mt-1 mb-3"
          >
            Enviar
          </button>
        </div>
      </form>
    </Fragment>
  );
};
