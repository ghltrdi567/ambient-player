import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sound from './Sound/Sound'
import { RisingPitch } from './Sound/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Sound soundPath='../../sounds/test.flac'/>
        <Sound soundPath='../../sounds/test.mp3'/>
       
    </>
  )
}

export default App
