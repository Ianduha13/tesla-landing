import "./styles/dropdown.css"
import { SiCitrix } from "react-icons/si"
const DropdownMenu = ({ isOpen, setOpen }) => {
  return (
    <>
      <div
        className={`dd-menu-container ${isOpen}`} //>ref={menuRef}
      >
        <button
          className='close-btn'
          onClick={(e) => {
            e.preventDefault()
            setOpen("hidden")
          }}
        >
          <SiCitrix />
        </button>
        <ul className='options-menu'>
          <li className='option-list'>Existing Inventory</li>
          <li className='option-list'>Used Inventory</li>
          <li className='option-list'>Trade-In</li>
          <li className='option-list'>Test Drive</li>
          <li className='option-list'>Insurance</li>
          <li className='option-list'>Cybertruck</li>
          <li className='option-list'>Roadster</li>
          <li className='option-list'>Semi</li>
          <li className='option-list'>Charging</li>
          <li className='option-list'>Powerwall</li>
          <li className='option-list'>Commercial Energy</li>
          <li className='option-list'>Utilities</li>
          <li className='option-list'>Find Us</li>
          <li className='option-list'>Support</li>
          <li className='option-list'>Investor Relations</li>
        </ul>
      </div>
      <div
        className={`dd-overlay ${isOpen}`}
        onClick={() => {
          setOpen("hidden")
        }}
      ></div>
    </>
  )
}
export default DropdownMenu
