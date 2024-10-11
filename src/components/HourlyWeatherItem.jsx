const HourlyWeatherItem = () => {
    return(
        <li className="weather-item">
              < p className="time">00:00</p>
              <img src="icons/clouds.png" className="weather-icon" />
              <p className="temperature">23°C</p>
            </li>
    );
};

export default HourlyWeatherItem;