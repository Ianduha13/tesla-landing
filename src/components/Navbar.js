import "./styles/navbar.css"
import { SiTesla } from "react-icons/si"
const Navbar = () => {
  return (
    <nav>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <SiTesla size={"2em"} />
        </div>
        <div className='navbar-center'>
          <ul className='center-list'>
            <li className='list-item'>Model S</li>
            <li className='list-item'>Model 3</li>
            <li className='list-item'>Model X</li>
            <li className='list-item'>Model Y</li>
            <li className='list-item'>Solar Roof</li>
            <li className='list-item'>Solar Panels</li>
          </ul>
        </div>
        <div className='navbar-right'>
          <ul className='right-list'>
            <li className='list-item'>Shop</li>
            <li className='list-item'>Account</li>
            <li className='list-item'>Menu</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
