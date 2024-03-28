import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function HomePage({ dataSkill, dataExp, title }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h4 className="page-title mt-2">
        <span>About</span> Me
      </h4>
      <div
        className="d-flex justify-content-between"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <div className="card mt-3">
          <div className="card-body">
            <div className="row align-middle">
              <div className="col-6 profile-section w-25">
                <div className="image-container">
                  <Image
                    src={`/profile.svg`}
                    className="image"
                    height="100"
                    width="100"
                    alt="profile habib iefan"
                  />
                </div>
              </div>
              <div className="col-6 heading-profile w-75 mt-auto mb-auto">
                <h4 className="title-name">Habib Irfan Mahaasin</h4>
                <p className="mini-title">
                  Website <span>Developer</span>
                </p>
              </div>
            </div>
            <p className="intro mt-3" align="justify">
              {" "}
              Hi! , I'm <span>Habib Irfan Mahaasin,</span> a website developer.
              I am currently a fresh graduate from Telkom University majoring in
              Computer Engineering. I am interested in learning and working in
              the field of software development, especially website development
              with various existing technologies and frameworks.
            </p>
            <div className="resume-section text-end">
              <Link
                href={`https://drive.google.com/file/d/1GidQD7G1UUwMvQcSYzZLAc1PNSa2q7jn/view?usp=sharing`}
                className="title-url"
                target={"_blank"}
              >
                <div className="title-span mt-3 mb-3">
                  <span className="cv-download">📥 Download Resume</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h4
        className="page-title mt-4"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="200"
      >
        Skills & <span>Tools</span>
      </h4>
      <div className="skill-list mt-3 d-flex flex-wrap align-self-center justify-content-center">
        {dataSkill.map((skill_tools, index) => {
          return (
            <Image
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 100}
              key={skill_tools.id}
              src={`/skills-tools/${skill_tools.id}.svg`}
              className="image"
              width="60"
              height="60"
              alt={skill_tools.title}
              title={skill_tools.title}
            />
          );
        })}
      </div>
      <h4
        className="page-title mt-4"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <span>Work</span> Experience
      </h4>
      {dataExp.map((exp, index) => {
        return (
          // <Link href={'/'} className='card-nav'>
          <div
            className="card mt-4 rounded-4 pb-2"
            key={exp.id}
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay={index * 200}
          >
            <div className="card-body">
              <div className="row align-middle">
                <div className="col-6 profile-section w-25">
                  <div className="image-container">
                    <Image
                      src={`/experience/${exp.id}.svg`}
                      className="image"
                      height="100"
                      width="100"
                      alt="profile habib irfan"
                    />
                  </div>
                </div>
                <div className="col-6 heading-profile w-75 mt-auto mb-auto">
                  <h6 className="mt-3">{exp.company}</h6>
                  <p className="x-mini-title">
                    As a <span>{exp.as}</span>
                  </p>
                  <p className="job-duration">
                    <span>{exp.time}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          // </Link>
        );
      })}
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const responseSnT = await fetch(`${process.env.DATA_URL}/api/skills-tools`);
  const dataSnT = await responseSnT.json();

  const responseExperience = await fetch(
    `${process.env.DATA_URL}/api/experience`
  );
  const dataExperience = await responseExperience.json();

  return {
    props: {
      dataSkill: dataSnT,
      dataExp: dataExperience,
      title: "Sin - Homepage",
    },
  };
}
