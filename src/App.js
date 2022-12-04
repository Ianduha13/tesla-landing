import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import "./index.css"

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <LandingPage />
      </header>
    </div>
  )
}

export default App
