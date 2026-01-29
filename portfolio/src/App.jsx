import { useState } from 'react'
import { Hero } from './components/Hero'
import { Resume } from './components/Resume'
import { About } from './components/About'

// Add global styles for smooth scrolling
const globalStyles = `
  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #021024;
  }
  ::-webkit-scrollbar-thumb {
    background: #5483B3;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #7DA0CA;
  }
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div> 
        <style>{globalStyles}</style>
        <Hero />
        <About />
        <Resume />
      </div>
      
  
  )
}

export default App
