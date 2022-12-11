import ArrowDown from "../components/ArrowDown"
import Buttons from "../components/Buttons"
import Header from "../components/Header"
import "./styles/modelcard.css"

const ModelCard = ({ model, imgUrl, key }) => {
  return (
    <div className='img-modal' key={key}>
      <Header header={model} />
      <div className='img-container'>
        <img src={`${imgUrl}`} alt={`${model}`} className='home-page-img' />
      </div>
      <Buttons />
      <ArrowDown />
    </div>
  )
}
export default ModelCard
