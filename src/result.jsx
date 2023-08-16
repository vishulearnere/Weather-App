
import humiditylogo from './Images/humidity.png'
import windlogo from './Images/wind(3).png'


const result = (props) => {
   const  data = props.data
    console.log(data,"in result")
  return (
    <div className="winfo">
      <img src={data.image} alt="" className="icon" />
      <h1>{Math.round(data.celcius)}°c</h1> <h2>{data.name}</h2>
      <div className="details">
        <div className="col">
          <img src={humiditylogo} alt="" />
          <div className="humidity">
            <p>{Math.round(data.humidity)}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src={windlogo} alt="" />
          <div className="wind">
            <p>{Math.round(data.speed)} km/h</p> <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default result