import { useState } from 'react'
import './App.css'
import MyHeader from './assets/MyHeader'
import MyMain from './assets/MyMain'
import MyFooter from './assets/MyFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHeader />
      <MyMain />
      <MyFooter />
    </>
  )
}

export default App
