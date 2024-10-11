import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import SearchSection from "./components/SearchSection";

const APP = () => {
  return (
    <div className="container">
      {/* 搜索项 */}
      <SearchSection />

      {/* Search section */}
      <div className="weather-section">
        <CurrentWeather />
      {/* 24小时预报 */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <HourlyWeatherItem/>
            <HourlyWeatherItem/>
            <HourlyWeatherItem/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default APP; 