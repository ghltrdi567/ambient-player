import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sound from './Sound/Sound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Sound soundPath='../../sounds/test.flac' soundCaption='монетка'/>
     
      </div>
        
        <div>
        <Sound soundPath='../../sounds/test.mp3' soundCaption="Пули"/>
        </div>

        <div>
        <Sound soundPath='../../sounds/loop.wav' soundCaption='storm'/>
        </div>
        
        
       
    </>
  )
}

export default App
