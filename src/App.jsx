import { useState } from 'react'
import Top from './components/Top'
import Meme from './components/Meme'
import './style.css'
import memesData from "./memesData.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top />
      <Meme />
    </>
  )
}

export default App
