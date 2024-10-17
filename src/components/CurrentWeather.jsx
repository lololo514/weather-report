import React from "react";
import PropTypes from "prop-types"; // 导入 PropTypes
import "./icon.css";  // 确保引入了你的 CSS 文件

const CurrentWeather = ({ currentWeather }) => {
  const weatherClass = getWeatherClass(currentWeather.weatherIcon) || 'default'; // 使用默认类名

  return (
    <div className={`current-weather ${weatherClass}`}>
      <div className="box">
        {weatherClass === "sun" && (
          <>
            <div className="sun"></div>
            <div className="rays"></div>
          </>
        )}
        {weatherClass === "cloud" && <div className="cloud"></div>}
        {weatherClass === "rain" && <div className="rain"></div>}
        {weatherClass === "snow" && <div className="snow"></div>}
        {weatherClass === "thunder" && <div className="bolt"></div>}
        {weatherClass === "default" && <div className="default-icon">天气图标不可用</div>} {/* 默认状态 */}
      </div>
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

const getWeatherClass = (weatherIcon) => {
  switch (weatherIcon) {
    case 1000:
      return "sun";
    case 1003:
    case 1006:
    case 1009:
      return "cloud";
    case 1063:
    case 1150:
    case 1183:
      return "rain";
    case 1066:
    case 1117:
    case 1210:
      return "snow";
    case 1087:
    case 1273:
      return "thunder";
    default:
      return ""; // 如果没有匹配，返回空字符串
  }
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    weatherIcon: PropTypes.number, // weatherIcon 可能是可选的
  }).isRequired,
};

export default CurrentWeather;
