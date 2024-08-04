import { useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherFiveDaysInformations from './components/WeatherFiveDaysInformations/WeatherFiveDaysInformations'

function App() {

  const [weather, setWeather] = useState({});

  const [weatherFiveDays, setWeatherFiveDays] = useState({});

  const [city, setCity] = useState('');

  //const inputRef = useRef('')

  const handleInputChange = (event) => {
    setCity(event.target.value); 
  }

  async function searchCity() {

    if(!city) return;

    setCity('') // clear previous weather data

    const apiKey = "4438171b63239e4c23fedb5a9dcbf242";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    try {

      // Requisição para a api do die da OpenWeather
    const responseApi = await axios.get(url);
    
    // longitude da Api de 5 dias
    const longitude = await responseApi.data.coord.lon;
    
    // latitude da Api de 5 dias
    const latitude = await responseApi.data.coord.lat;
    
    // url da Api de 5 dias
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br&units=metric`;

    // Requisição para a api de 5 dias do OpenWeather 5 dias
    const responseApiFiveDays = await axios.get(urlFiveDays);
    
    // console.log(responseApiFiveDays);

    // console.log(longitude, latitude);

    setWeatherFiveDays(responseApiFiveDays.data);

    setWeather(responseApi.data);

    console.log(responseApiFiveDays.data.list);

    console.log(responseApiFiveDays.data.list[0]);

    console.log(responseApiFiveDays.data.list[0].main);

    // fetch weather data from API

    } catch (error) {

      console.error("Erro ao buscar dados da API:", error);

    }

  }

  return (
    <>
      <div className='container'>
          <h1>Previsão do Tempo</h1>
        <input 
          onChange={handleInputChange}
          //ref={inputRef}
          value={city} 
          type="text"
          placeholder="Digite o nome da cidade"
        />
        <button onClick={searchCity}>Buscar</button>

        <WeatherInformations weather={weather}/>
        <WeatherFiveDaysInformations weatherFiveDays={weatherFiveDays}/>
      </div>
    </>
  )
}

export default App
