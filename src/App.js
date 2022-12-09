import Navbar from "./components/Navbar"
import DropdownMenu from "./components/DropdownMenu"
import "./index.css"
import { useState } from "react"

const App = () => {
  const [isOpen, setOpen] = useState("hidden")
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar setOpen={setOpen} />
        <DropdownMenu isOpen={isOpen} setOpen={setOpen} />
      </header>
    </div>
  )
}

export default App
