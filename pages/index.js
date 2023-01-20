import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from 'react'

function HomePage() {
  const [isLoading,setIsLoading] = useState(true)
  const [skillsAndTools,setSkillsAndTools] = useState(null)
  const [experience,setExperience] = useState(null)

  useEffect (() => {
    async function fetchAllData() {
        const responseSnT = await fetch('/api/skills-tools')
        const dataSnT = await responseSnT.json()
        setSkillsAndTools(dataSnT)

        const responseExperience = await fetch('/api/experience')
        const dataExperience = await responseExperience.json()
        setExperience(dataExperience)

        setIsLoading(false)
    }
    fetchAllData()
  },[])

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-content-center loading-bar'>
        <div className="spinner-grow" role="status">
        </div>
      </div>
    )
  }

  return (
    <div>
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
                <h4 className='mt-3'>Habib Irfan Mahaasin</h4>
                <p className='mini-title'>Junior <span>Web Development</span></p>
              </div>
            </div>
            <p className='intro mt-4' align='justify'> Hi! , I'm <span>Habib Irfan Mahaasin</span> Junior Website Developer from Telkom University. I'm interested in learning about website development, especially the front-end web development with various frameworks, but I'm also still learning some parts of the back-end web development even though it's not too intensive</p>
          </div>
        </div>
      </div>
      <h4 className='page-title mt-4'>Skills & <span>Tools</span></h4>
      <div className="horizontal-slider-container mt-3 mb-5">
        <ul className="horizonal-slider">
          {skillsAndTools.map((skill_tools) => {
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
      {experience.map((exp) => {
        return(
          <Link href={'#'} className='card-nav'>
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
          </Link>
        )
      })}
    </div>
  );
}

export default HomePage;
