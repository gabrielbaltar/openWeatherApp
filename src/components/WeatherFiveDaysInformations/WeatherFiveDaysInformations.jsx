
import './WeatherFiveDaysCss.css';

function WeatherFiveDaysInformations({ weatherFiveDays }) {

    if(!weatherFiveDays || !weatherFiveDays.list || weatherFiveDays.list.length === 0) {
        return <p></p>;
    }

    const capitalizeFirstLetter = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    // Primeiro dia da semana
    const icons = weatherFiveDays.list[0].weather[0].icon;
    const temperatureMin = Math.round(weatherFiveDays.list[0].main.temp_min);
    const temperatureMax = Math.round(weatherFiveDays.list[0].main.temp_max);
    const weatherDescription = capitalizeFirstLetter(weatherFiveDays.list[0].weather[0].description);

    // Segundo dia da semana
    const icons2 = weatherFiveDays.list[7].weather[0].icon;
    const temperatureMin2 = Math.round(weatherFiveDays.list[7].main.temp_min);
    const temperatureMax2 = Math.round(weatherFiveDays.list[7].main.temp_max);
    const weatherDescription2 = capitalizeFirstLetter(weatherFiveDays.list[7].weather[0].description);

    // Terceiro dia da semana
    const icons3 = weatherFiveDays.list[15].weather[0].icon;
    const temperatureMin3 = Math.round(weatherFiveDays.list[15].main.temp_min);
    const temperatureMax3 = Math.round(weatherFiveDays.list[15].main.temp_max);
    const weatherDescription3 = capitalizeFirstLetter(weatherFiveDays.list[15].weather[0].description);

    // Quarto dia da semana
    const icons4 = weatherFiveDays.list[23].weather[0].icon;
    const temperatureMin4 = Math.round(weatherFiveDays.list[23].main.temp_min);
    const temperatureMax4 = Math.round(weatherFiveDays.list[23].main.temp_max);
    const weatherDescription4 = capitalizeFirstLetter(weatherFiveDays.list[23].weather[0].description);

    // Quinto dia da semana
    const icons5 = weatherFiveDays.list[31].weather[0].icon;
    const temperatureMin5 = Math.round(weatherFiveDays.list[31].main.temp_min);
    const temperatureMax5 = Math.round(weatherFiveDays.list[31].main.temp_max);
    const weatherDescription5 = capitalizeFirstLetter(weatherFiveDays.list[31].weather[0].description);

    return (
        <div className="weather-five-days-container">
            <h2>Previsão da Semana</h2>
            <div className="temperature-card-content">
                <div className="temperature-card">
                    <p>Sexta-Feira 4</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{temperatureMin} C° / {temperatureMax} C°</p>
                    <p>{weatherDescription}</p>
                </div>

                <div className="temperature-card">
                    <p>Quinta-Feita 5</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons2}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{temperatureMin2} C° / {temperatureMax2} C°</p>
                    <p>{weatherDescription2}</p>
                </div>

                <div className="temperature-card">
                    <p>Qua. 4</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons3}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{temperatureMin3} C° / {temperatureMax3} C°</p>
                    <p>{weatherDescription3}</p>
                </div>
                <div className="temperature-card">
                    <p>Qua. 4</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons4}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{temperatureMin4} C° / {temperatureMax4} C°</p>
                    <p>{weatherDescription4}</p>
                </div>
                <div className="temperature-card">
                    <p>Qua. 4</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons5}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{temperatureMin5} C° / {temperatureMax5} C°</p>
                    <p>{weatherDescription5}</p>
                </div>
            </div>
        </div>
      );
   
} 

export default WeatherFiveDaysInformations;