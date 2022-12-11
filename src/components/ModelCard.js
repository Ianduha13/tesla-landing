import ArrowDown from "../components/ArrowDown"
import Buttons from "../components/Buttons"
import Header from "../components/Header"

const ModelCard = ({ model, imgUrl, key }) => {
  return (
    <div className='img-modal' key={key}>
      <img src={`${imgUrl}`} alt={`${model}`} className='home-page-img' />
      <Header header={model} />
      <Buttons />
      <ArrowDown />
    </div>
  )
}
export default ModelCard
