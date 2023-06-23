import {useEffect, useState} from "react"


const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [timestamp, setTimestamp] = useState("")
  const timestamp1 = 160395839

  useEffect(() => {
    //get url and save it 
    fetch(url)
    .then((response) => response.json())
    .then((data) => data["iss_position"])
    .then((position =>  {
      setLatitude(position["latitude"])
      setLongitude(position["longitude"])
      setTimestamp(position["timestamp"])
    }))

  }, [])

  useEffect(() => {
    //get url and save it 
    fetch(url)
    .then((response) => response.json())
    .then((position) =>  {
      setTimestamp(position["timestamp"])
    })
  }, [])


  return <div className="display-value">
    <h1>Poloha vesmírné lodi</h1>
    <h2>Zeměpisná šířka</h2>
    <p>{latitude}</p>
    <h2>Zeměpisná délka</h2>
    <p>{longitude}</p>
    <h3>Timestamp</h3>
    <p>{timestamp}</p>
   

    <a href="https://mapy.cz/zakladni?x=${latitude}&y=${longitude}&z=5" target="_blank">Odkaz na mapu</a>
    </div>

}
  

export default App