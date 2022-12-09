import "./styles/header.css"
const Header = ({ header }) => {
  return (
    <div className='header-container'>
      <header className='header'>{header}</header>
      <p className='sub-header'>Schedule a test drive</p>
    </div>
  )
}
export default Header
