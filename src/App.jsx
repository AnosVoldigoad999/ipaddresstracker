import React, { useEffect, useState } from 'react'
import './App.css'
import Info from './Info'
import axios from 'axios'
import Map from './Map'
function App() {
  const [ip, setIp] = useState("")
  const [location, setLocation] = useState("")
  const [timezone, setTimezone] = useState("")
  const [isp, setIsp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [latAndLong, setLatandLong] = useState([])
 function handleIp (){
  setIsLoading(true)
    axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_W9e016P7fQqWixIaRWVnrwzV7eTzD&ipAddress=${ip}`).then(res=>{
    const data = res.data
    setIsLoading(false) //stop the "loading" sequence when data has been received
    console.log(data) //to see what it returns
    setLocation(`${data.location.region}, ${data.location.country}`)//location
    setTimezone(`UTC ${data.location.timezone}`)//timezone
    setIsp(data.isp)//isp
    setLatandLong([data.location.lat, data.location.lng])//latitude and longitude for the map
    console.log(latAndLong)//also to see what it returns
    }).catch(error=>{
      alert(error)//for the user
      console.log(error)
      setIsLoading(false)
    })
  
  }
  return <>
    <main>
      <div className="background" />
      <h1>IP Address Tracker</h1>
      <div className="input">
        <input placeholder='Type IP Address...' type="text" onChange={e=>setIp(e.target.value)}/>
        <button onClick={handleIp}>
          <img src="public/images/icon-arrow.svg" alt="arrow" />
        </button>
      </div>
      <Info ip={ip} location={location} timezone={timezone} isp={isp} isLoading={isLoading} />
      <img src="/images/pattern-bg-mobile.png" alt="idk" />
      {(!isLoading && latAndLong.length<1)?<p style={{marginTop:"20vh"}}>Search to view Map...</p>:isLoading?<p style={{marginTop:"20vh"}}>Loading...</p>:<Map latAndLong={latAndLong} location={location} /> }
      {/*basically, if its not loading and the things needed for the map to work properly(latitude and longitude) arent available yet, ask the user to search, if the user is searching, show "loading..." and if the user aint searching and the necessary info is available, load up the map! */}
    </main>
  </>
}

export default App