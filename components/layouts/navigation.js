import Image from "next/image";
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Navigation(){
    const router = useRouter()

    return(
      <nav className="navbar fixed-bottom bg-nav container-fluid">
          <div className="w-50 d-flex justify-content-left menu-1">
            <Link className={router.pathname == "/" ? "icon-nav active-nav" : "icon-nav"} href={'/'} aria-label="home">
              <Image src={`/navigation/${router.pathname === "/" ? "profile" : "profile-outline"}.png`} height='30' width='30' className="icon-png" alt="navbarimg"></Image>
            </Link>
          </div>
          <div className="d-flex menu-2">
            <Link className={router.pathname == "/projects" ? "icon-nav active-nav" : "icon-nav"} href={'/projects'} aria-label="projects">
            <Image src={`/navigation/${router.pathname === "/projects" ? "project" : "project-outline"}.png`} height='30' width='30' className="icon-png" alt="navbarimg"></Image>
            </Link>
          </div>
          <div className="d-flex justify-content-right menu-3">
            <Link className={router.pathname == "/contact" ? "icon-nav active-nav" : "icon-nav"} href={'/contact'} aria-label="contacts">
            <Image src={`/navigation/${router.pathname === "/contact" ? "chat" : "chat-outline"}.png`} height='30' width='30' className="icon-png" alt="navbarimg"></Image>
            </Link>
          </div>
      </nav>
    )
}