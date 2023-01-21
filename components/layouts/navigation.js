import { BiHomeAlt,BiFile,BiPhoneCall } from "react-icons/bi";
import Image from "next/image";
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Navigation(){
    const router = useRouter()

    return(
      <nav className="navbar fixed-bottom bg-nav container-fluid">
          <div className="col-4 d-flex justify-content-center menu-1">
            <Link className={router.pathname == "/" ? "icon-nav active-nav" : "icon-nav"} href={'/'}>
              <Image src={`/navigation/${router.pathname === "/" ? "profile" : "profile-outline"}.png`} height='30' width='30' Priority className="icon-png"></Image>
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-center menu-2">
            <Link className={router.pathname == "/projects" ? "icon-nav active-nav" : "icon-nav"} href={'/projects'}>
            <Image src={`/navigation/${router.pathname === "/projects" ? "project" : "project-outline"}.png`} height='30' width='30' Priority className="icon-png"></Image>
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-center menu-3">
            <Link className={router.pathname == "/contact" ? "icon-nav active-nav" : "icon-nav"} href={'/contact'}>
            <Image src={`/navigation/${router.pathname === "/contact" ? "chat" : "chat-outline"}.png`} height='30' width='30' Priority className="icon-png"></Image>
            </Link>
          </div>
      </nav>
    )
}