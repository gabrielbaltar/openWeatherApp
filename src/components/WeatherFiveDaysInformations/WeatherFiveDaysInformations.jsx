
import './WeatherFiveDaysCss.css';

function WeatherFiveDaysInformations({ weatherFiveDays, datePart, datePart2, datePart3, datePart4, datePart5 }) {

    if(!weatherFiveDays || !weatherFiveDays.list || weatherFiveDays.list.length === 0) {
        return <p></p>;
    }

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    // Variável armazenando os ícones retornados da api da OpenWeather
    const icons = weatherFiveDays.list[0].weather[0].icon;

    const icons2 = weatherFiveDays.list[8].weather[0].icon;

    const icons3 = weatherFiveDays.list[15].weather[0].icon;

    const icons4 = weatherFiveDays.list[23].weather[0].icon;

    const icons5 = weatherFiveDays.list[31].weather[0].icon;

    return (
        <div className="weather-five-days-container">
            <h2>Previsão da Semana</h2>
            <div className="temperature-card-content">
                <div className="temperature-card">
                    <p>{datePart}</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{Math.floor(weatherFiveDays.list[0].main.temp_min)} C° / {Math.ceil(weatherFiveDays.list[0].main.temp_max)} C°</p>
                    <p>{capitalizeFirstLetter(weatherFiveDays.list[0].weather[0].description)}</p>
                </div>

                <div className="temperature-card">
                    <p>{datePart2}</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons2}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{Math.floor(weatherFiveDays.list[8].main.temp_min)} C° / {Math.ceil(weatherFiveDays.list[8].main.temp_max)} C°</p>
                    <p>{capitalizeFirstLetter(weatherFiveDays.list[8].weather[0].description)}</p>
                </div>

                <div className="temperature-card">
                    <p>{datePart3}</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons3}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{Math.floor(weatherFiveDays.list[15].main.temp_min)} C° / {Math.ceil(weatherFiveDays.list[15].main.temp_max)} C°</p>
                    <p>{capitalizeFirstLetter(weatherFiveDays.list[15].weather[0].description)}</p>
                </div>
                <div className="temperature-card">
                    <p>{datePart4}</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons4}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{Math.floor(weatherFiveDays.list[23].main.temp_min)} C° / {Math.ceil(weatherFiveDays.list[23].main.temp_max)} C°</p>
                    <p>{capitalizeFirstLetter(weatherFiveDays.list[23].weather[0].description)}</p>
                </div>
                <div className="temperature-card">
                    <p>{datePart5}</p>
                    <img 
                        src={`http://openweathermap.org/img/wn/${icons5}.png`} alt="Ícone da temperatura Atual na cidade"
                    /> 
                    <p>{Math.floor(weatherFiveDays.list[31].main.temp_min)} C° / {Math.ceil(weatherFiveDays.list[31].main.temp_max)} C°</p>
                    <p>{capitalizeFirstLetter(weatherFiveDays.list[31].weather[0].description)}</p>
                </div>
            </div>
        </div>
      );
   
} 

export default WeatherFiveDaysInformations;