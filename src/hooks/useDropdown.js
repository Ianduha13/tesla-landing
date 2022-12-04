import { useState, useEffect, useRef } from "react"
const useDropdown = () => {
  const [open, setOpen] = useState(false)

  const menuRef = useRef()

  useEffect(() => {
    const handlerDropdown = (e) => {
      const newOpenState = !menuRef.current.contains(e.target) && false
      setOpen(newOpenState)
    }
    document.addEventListener("mousedown", handlerDropdown)
    return () => {
      document.removeEventListener("mousedown", handlerDropdown)
    }
  })
}
export default useDropdown
