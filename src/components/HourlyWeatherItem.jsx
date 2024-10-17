import { weatherCodes } from '../constants';

const HourlyWeatherItem = ({ hourlyWeather }) => {
    const temperature = Math.floor(hourlyWeather.temp_c);
    const time = hourlyWeather.time.split(" ")[1].substring(0, 5); // 提取时间部分
    const weatherCode = hourlyWeather.condition.code;
    
    // 获取天气图标
    const weatherIcon = Object.keys(weatherCodes).find((icon) => 
        weatherCodes[icon].includes(weatherCode)
    );

    return (
        <li className="weather-item">
            <p className="time">{time}</p>
            {weatherIcon ? (
                <img src={`icons/${weatherIcon}.png`} alt={hourlyWeather.condition.text} className="weather-icon" />
            ) : (
                <img src={`icons/default.png`} alt="Default weather icon" className="weather-icon" /> // 默认图标
            )}
            <p className="temperature">{temperature}°C</p>
        </li>
    );
};

export default HourlyWeatherItem;
