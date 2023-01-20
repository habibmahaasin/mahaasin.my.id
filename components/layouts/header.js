import Image from "next/image"

export default function Header(){
    return(
      <nav className="navbar fixed-top bg-header">
        <div className="header-web-app container-fluid d-flex justify-content-between">
          <Image src={`/logo.svg`} className='image' height='40' width='40' alt="him logo" />
          <div class="toggle">
            <input type="checkbox" id="toggle-switch" />
            <label for="toggle-switch"><span class="screen-reader-text">Toggle Color Scheme</span></label>
          </div>
        </div>
      </nav>
    )
}