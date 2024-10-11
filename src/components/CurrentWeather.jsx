const CurrentWeather = () => {
   return(
    <div className="current-weather">
          <img src="icons/clouds.png" 
          className="weather-icon" />
          <h2 className="temperature">
            23<span>°C</span>
          </h2>
          <p className="description">部分多云</p>
        </div>

   ); 
};

export default CurrentWeather;