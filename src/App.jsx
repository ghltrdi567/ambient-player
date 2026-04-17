import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sound from './Sound/Sound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <div className='souuds-list'>
      <Sound soundPath='../../sounds/test.flac' soundCaption='монетка'/>
     
      
        
        
     <Sound soundPath='../../sounds/test.mp3' soundCaption="Пули"/>
     

     
     <Sound soundPath='../../sounds/loop.wav' soundCaption='storm'/>


      </div>

      
        
        
        
       
    </>
  )
}

export default App
