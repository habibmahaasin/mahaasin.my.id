import { BiHomeAlt,BiFile,BiPhoneCall } from "react-icons/bi";
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Navigation(){
    const router = useRouter()

    return(
      <nav className="navbar fixed-bottom bg-nav container-fluid">
          <div className="col-4 d-flex justify-content-center menu-1">
            <Link className={router.pathname == "/" ? "icon-nav active-nav" : "icon-nav"} href={'/'}>
              <BiHomeAlt/>
              <p className="text-nav">Home</p>
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-center menu-2">
            <Link className={router.pathname == "/projects" ? "icon-nav active-nav" : "icon-nav"} href={'/projects'}>
              <BiFile/>
              <p className="text-nav">Project</p>
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-center menu-3">
            <Link className={router.pathname == "/contact" ? "icon-nav active-nav" : "icon-nav"} href={'/contact'}>
              <BiPhoneCall/>
              <p className="text-nav">Contact</p>
            </Link>
          </div>
      </nav>
    )
}