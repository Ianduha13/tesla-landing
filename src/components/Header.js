import "./styles/header.css"
const Header = ({ header, key }) => {
  return (
    <div className='header-container' key={key}>
      <header className='header'>{header}</header>
      <p className='sub-header'>Schedule a test drive</p>
    </div>
  )
}
export default Header
