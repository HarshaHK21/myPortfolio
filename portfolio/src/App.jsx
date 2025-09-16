import { useState } from 'react'
import { Hero } from './components/Hero'
import { Resume } from './components/Resume'
import { About } from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div> 
        <Hero />
        <About />
        <Resume />
      </div>
      
  
  )
}

export default App
