import { useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherFiveDaysInformations from './components/WeatherFiveDaysInformations/WeatherFiveDaysInformations'

function App() {

  const [weather, setWeather] = useState({});

  const [weatherFiveDays, setWeatherFiveDays] = useState({});

  const [city, setCity] = useState('');

  const [error, setError] = useState('');

  const [datePart, setDatePart] = useState('');

  const [datePart2, setDatePart2] = useState('');

  const [datePart3, setDatePart3] = useState('');

  const [datePart4, setDatePart4] = useState('');

  const [datePart5, setDatePart5] = useState('');

  // Função para buscar a cidade ao clicar no botão
  const handleInputChange = (event) => {
    setCity(event.target.value); 
  }

  // Função para buscar a cidade ao pressionar a tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchCity();
    }
  }

  // Função para buscar a cidade
  async function searchCity() {

    setError('');

    // setWeather({});

    // setWeatherFiveDays({});

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

    // data do dia da previsão
    const apiDate = await responseApiFiveDays.data.list[0].dt_txt;
    const apiDate2 = await responseApiFiveDays.data.list[8].dt_txt;
    const apiDate3 = await responseApiFiveDays.data.list[20].dt_txt;
    const apiDate4 = await responseApiFiveDays.data.list[28].dt_txt;
    const apiDate5 = await responseApiFiveDays.data.list[36].dt_txt;

    const [extractDatePart] = apiDate.split(' ');
    const [datePart2] = apiDate2.split(' ');
    const [datePart3] = apiDate3.split(' ');
    const [datePart4] = apiDate4.split(' ');
    const [datePart5] = apiDate5.split(' ');

    // Convertendo a data para o formato dd/mm/aaaa
    const [year, month, day] = extractDatePart.split('-');
    const [year2, month2, day2] = datePart2.split('-');
    const [year3, month3, day3] = datePart3.split('-');
    const [year4, month4, day4] = datePart4.split('-');
    const [year5, month5, day5] = datePart5.split('-');

    const formattedDate = `${day}/${month}/${year}`;
    const formattedDate2 = `${day2}/${month2}/${year2}`;
    const formattedDate3 = `${day3}/${month3}/${year3}`;
    const formattedDate4 = `${day4}/${month4}/${year4}`;
    const formattedDate5 = `${day5}/${month5}/${year5}`;

    setDatePart(formattedDate);
    setDatePart2(formattedDate2);
    setDatePart3(formattedDate3);
    setDatePart4(formattedDate4);
    setDatePart5(formattedDate5);
  

    // const [year, month, day] = datePart.split('-');
    
    setWeatherFiveDays(responseApiFiveDays.data);

    setWeather(responseApi.data);

    // console.log(responseApiFiveDays.data.list);

    // console.log(apiDate);

    // console.log(datePart);

    } catch (error) {

      setError('Cidade não encontrada. Por Favor tente novamente!');

    } 

  } 

  return (
    <>
      <div className='container'>
          <h1>Previsão do Tempo</h1>
        <input 
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          //ref={inputRef}
          value={city} 
          type="text"
          placeholder="Digite o nome da cidade"
        />
        <button onClick={searchCity}>Buscar</button>
        <WeatherInformations weather={weather}/>
        <WeatherFiveDaysInformations 
          weatherFiveDays={weatherFiveDays}
          datePart={datePart}
          datePart2={datePart2}
          datePart3={datePart3}
          datePart4={datePart4}
          datePart5={datePart5}  
        />
        <span>{error}</span>
      </div>
    </>
  )
}

export default App
