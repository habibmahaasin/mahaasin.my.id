import Image from "next/image"

export default function Header(){
    return(
      <nav className="navbar fixed-top bg-header">
        <div className="header-web-app container-fluid d-flex justify-content-between">
          <Image src={`/logo.svg`} className='image' height='42' width='42' alt="him logo" />
          <p className="copyright-head mt-3">
              <span>&#169; mahaasin.my.id 2023</span>
          </p>
        </div>
      </nav>
    )
}