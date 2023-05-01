import logo from '../assets/Instagram_logo.svg'
import avatar from '../assets/6-60071_spider-man-wallpaper-4k.jpg'


const Navbar = () => {
  return (

      <nav className="navbar shadow-sm">
      <div className='container'>
      <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width={140} />
        </a>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item ms-2 me-2">
            <a className="nav-link fs-4" href="#">
              <i className="bi bi-house-door-fill"></i>
            </a>
          </li>
          <li className="nav-item ms-2 me-2">
            <a className="nav-link fs-4" href="#">
              <i className="bi bi-telegram"></i>
            </a>
          </li>
          <li className="nav-item ms-2 me-2">
            <a className="nav-link fs-4" href="#">
              <i className="bi bi-heart"></i>
            </a>
          </li>
          <li className="nav-item ms-2 me-2">
            <a className="nav-link" href="#">
              <img src={avatar} className='avatar' style={{ 'border': '2px solid rgb(205, 90, 201)' }} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
