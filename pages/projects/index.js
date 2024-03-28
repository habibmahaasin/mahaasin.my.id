import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectsPage({ title }) {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjectList] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    async function fetchProjectList() {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjectList(data);
      setIsLoading(false);
    }
    fetchProjectList();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-content-center loading-bar">
        <div className="spinner-grow" role="status"></div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="content mb-[100px]">
        <h4 className="page-title mt-2">
          <span>Recent</span> Project
        </h4>
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay={100}
              data-aos-offset="-100"
            >
              <div className="card mt-3 border-0 project-card">
                <div className="card-body">
                  <div className="image-container">
                    <Image
                      src={`/projects/${project.img}.svg`}
                      width="100"
                      height="100"
                      className="image"
                      alt={project.title}
                      priority
                    />
                  </div>
                  <Link
                    href={`${project.url}`}
                    className="title-url"
                    target={"_blank"}
                  >
                    <div className="title-span mt-3 mb-3">
                      <span className="card-title">{project.title}</span>
                    </div>
                  </Link>
                  <p className="card-text" align="justify">
                    {project.desc}
                  </p>
                  <div className="tech">
                    <span>
                      <i>{project.tech}</i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-center mt-4">
          <h6>
            to see other projects{" "}
            <a
              className="url_others"
              href="https://github.com/habibmahaasin?tab=repositories"
              target="_blank"
            >
              <b>Click here</b>
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

export async function getStaticProps() {
  return {
    props: {
      title: "Sin - Project",
    },
  };
}
