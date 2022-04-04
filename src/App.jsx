import { useState } from 'react'
import './App.css'
import TopList from './components/TopList/TopList'
import Footer from './components/Foooter/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TopList />
      <Footer />
    </div>
  )
}

export default App
