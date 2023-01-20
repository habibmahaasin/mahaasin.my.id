import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectsPage() {
  const [isLoading,setIsLoading] = useState(true)
  const [projects,setProjectList] = useState(null)

  useEffect (() => {
    async function fetchProjectList() {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjectList(data)
        setIsLoading(false)
    }
    fetchProjectList()
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
      <div className="content">
        <h4 className='page-title'><span>Recent</span> Project</h4>
        {projects.map((project) => {
          return(
            <div key={project.id}>
              <div className='card mt-3 border-0 project-card'>
                <div className='card-body'>
                  <div className='image-container'>
                    <Image src={`/projects/${project.img}.svg`} width='100' height='100' className='image' />
                  </div>
                  <Link href={`${project.url}`} className='title-url' target={'_blank'}>
                    <div className='title-span mt-3 mb-3'>
                      <span className='card-title'>{project.title}</span>
                    </div>
                  </Link>
                  <p className='card-text' align='justify'>{project.desc}</p>
                  <div className='tech'>
                    <span><i>{project.tech}</i></span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;