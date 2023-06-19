import {useState, useEffect} from "react"


const App = () => {
  const [quote, setQuote] = useState("")
  const url = "https://api.kanye.rest/"
  
  useEffect (() => {
    getQuote()
  },[])

  console.log();
  const getQuote = async() => {
    const response = await fetch(url)
    const data = await response.json()
    const finalQuote = data["quote"]
    setQuote(finalQuote)
  }

    
  return(
    <div>
      <h1>{quote}</h1>
    </div>
    
  )
}

export default App