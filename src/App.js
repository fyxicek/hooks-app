import {useEffect, useState} from "react"


const App = () => {
  const [notify, setNotify] = useState("")
  const url = "http://api.open-notify.org/iss-now.json"
  

  useEffect(() => {
    getNofity()
  },[])

  console.log();

  const getNotify = async => {
    const response = await fetch(url)
    const data = await response.json()
    const finalNotify = data["timestamp"]
    setNotify(finalNotify)
  }
  return(
    <h1>{notify}</h1>
  )
  
}
export default App