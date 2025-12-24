import { useState } from 'react'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="main-app">
      <div id="content">
      <Header />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer />
      </div>
    </div>  
    </>
  )
}

export default App
