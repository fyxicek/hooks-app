import {useEffect, useState} from "react"


const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [timestamp, setTimestamp] = useState("")
  const [urlMap, setUrlMap] = useState("")
  const iss_long = data["iss_position"]["longitude"]
  const iss_lati = data["iss_position"]["latitude"]

  useEffect((map) => {
    
    //get url and save it 
    fetch(url)
    .then((response) => response.json())
    .then((data) => data["iss_position"])
    .then((position =>  {
      setLatitude(position["latitude"])
      setLongitude(position["longitude"])
      setTimestamp(position["timestamp"])
      
      setUrlMap(`https://mapy.cz/zakladni?x=${iss_long}&y=${iss_lati}&z=5`)
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
    <p className="text-color">{latitude}</p>
    <h2>Zeměpisná délka</h2>
    <p className="text-color">{longitude}</p>
    <a href={urlMap} rel="noreferrer" target="_blank">Odkaz na mapu</a>
    <h3>Timestamp</h3>
    <p className="text-color">{timestamp}</p>
    
    </div>

}
  

export default App