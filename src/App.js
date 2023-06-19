import {useState, useEffect} from "react"


const App = () => { 
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const sizeControl = () =>{
    setWindowSize(window.innerWidth)
  }
  useEffect ( () => {
    window.addEventListener("resize", sizeControl)
  })

  const heightControl = () =>{
    setWindowHeight(window.innerHeight)
  }

  useEffect (() => {
    console.log("ja jsem useEffect")
    window.addEventListener("resize", heightControl)
    return () => {
      console.log("ja jsem cleanUp function")
      window.removeEventListener("resize", sizeControl)
    }
  })
  
  return(
    <div>
      <h1>šířka okna</h1>
      <h2>{windowSize}</h2>
      <h3>{windowHeight}</h3>
    </div>
  )
 }

 export default App