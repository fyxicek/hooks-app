import {useEffect, useState} from "react"


const App = () => {
  const [notify, setNotify] = useState("")
  const url = "http://api.open-notify.org/iss-now.json"
  

  useEffect (() => {
    getNotify()
  },[])

  console.log();
  const getNotify = async() => {
    const response = await fetch(url)
    const data = await response.json()
    const finalNotify = data["timestamp", "iss_position"]
    setNotify(finalNotify)
  }
  return(
    <div>
      <h1>{notify}</h1>
    </div>
    
  )
  
}
export default App