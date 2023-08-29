import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function HomePage({dataSkill, dataExp, title}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h4 className='page-title mt-2'><span>About</span> Me</h4>
      <div className="d-flex justify-content-between">
        <div className="card mt-3">
          <div className="card-body">
            <div className="row align-middle">
              <div className='col-6 profile-section w-25'>
                <div className='image-container'>
                  <Image src={`/profile.svg`} className='image' height='100' width='100' alt="profile habib iefan" />
                </div>
              </div>
              <div className='col-6 heading-profile w-75 mt-auto mb-auto'>
                <h4 className='title-name'>Habib Irfan Mahaasin</h4>
                <p className='mini-title'>Website <span>Developer</span></p>
              </div>
            </div>
            <p className='intro mt-3' align='justify'> Hi! , I'm <span>Habib Irfan Mahaasin,</span> a website developer. I am currently a fresh graduate from Telkom University. I am interested in learning and working in the field of software development, especially website development with various existing technologies and frameworks.</p>
          </div>
        </div>
      </div>
      <h4 className='page-title mt-4'>Skills & <span>Tools</span></h4>
      <div className="horizontal-slider-container mt-3 mb-5">
        <ul className="horizonal-slider">
          {dataSkill.map((skill_tools) => {
            return (
              <li key={skill_tools.id}>
                <div className='image-container-index'>
                    <Image
                      src={`/skills-tools/${skill_tools.id}.svg`}
                      className='image'
                      width='100'height='100' 
                      alt={skill_tools.title}/>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <h4 className='page-title mt-4'><span>Work</span> Experience</h4>
      {dataExp.map((exp) => {
        return(
          // <Link href={'/'} className='card-nav'>
            <div className="card mt-4 rounded-4 pb-2" key={exp.id}>
              <div className="card-body">
                <div className="row align-middle">
                  <div className='col-6 profile-section w-25'>
                    <div className='image-container'>
                      <Image src={`/experience/${exp.id}.svg`} className='image' height='100' width='100' alt="profile habib irfan" />
                    </div>
                  </div>
                  <div className='col-6 heading-profile w-75 mt-auto mb-auto'>
                    <h6 className='mt-3'>{exp.company}</h6>
                    <p className='x-mini-title'>As a <span>{exp.as}</span></p>
                    <p className='job-duration'><span>{exp.time}</span></p>
                  </div>
                </div>
              </div>
            </div>
          // </Link>
        )
      })}
    </div>
  );
}

export default HomePage;

export async function getStaticProps(){
    const responseSnT = await fetch(`${process.env.DATA_URL}/api/skills-tools`)
    const dataSnT = await responseSnT.json()

    const responseExperience = await fetch(`${process.env.DATA_URL}/api/experience`)
    const dataExperience = await responseExperience.json()

    return{
        props:{
            dataSkill : dataSnT,
            dataExp : dataExperience,
            title : 'Sin - Homepage'
        }
    }
}