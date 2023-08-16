// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Result from './result'
import searchlogo from './Images/search.png'
import Clouds from './Images/clouds.png'

function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: 'London',
    humidity: 10,
    speed: 2,
    image: Clouds,
  })
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const handleClick = () => {
    if (name !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=16bfa98849718de13b6e8978b87d47b8&units=metric`
      axios
        .get(apiUrl)
        .then((res) => {
          // console.log(res.data)
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
          })
          setError('')
        })
        .catch((err) => {
          if (err.response.status == 404) {
            setError('Invalid City Name')
          } else {
            setError('')
          }
          console.log(err)
        })
    }
  }

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setName(e.target.value)}
          />
          <button>
            <img src={searchlogo} onClick={handleClick} alt="" />
          </button>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <Result data={data} />
      </div>
    </div>
  )
}
export default Home
