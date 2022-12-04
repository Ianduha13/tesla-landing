import ArrowDown from "../components/ArrowDown"
import Buttons from "../components/Buttons"
import Header from "../components/Header"
import "./styles/landing.css"
const LandingPage = () => {
  return (
    <div className='img-container'>
      <div className='model-s'>
        <Header header={"Model S"} key={1} />
        <img
          src='https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD'
          alt='model-s'
          className='model-s home-page-img'
        />
        <Buttons />
        <ArrowDown />
      </div>
      <div className='model-s'>
        <Header header={"Model S"} key={1} />
        <img
          src='https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD'
          alt='model-s'
          className='model-s home-page-img'
        />
        <Buttons />
        <ArrowDown />
      </div>
    </div>
  )
}
export default LandingPage
