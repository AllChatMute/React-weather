import axios from "axios";
import { useEffect, useState } from "react";
import NoResults from "./NoResults";

interface props {
  city: string;
}

const Weather: React.FC<props> = ({ city }) => {
  const geoCoding = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=9fe4e03a89fb27af07a9e51f7ab7746f`;
  const [temp, setTemp] = useState<string>("0");
  const [weather, setWeather] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [icon, setIcon] = useState<string>("10n");
  const [isError, setIsError] = useState<boolean>(true);

  useEffect(() => {
    const fetchCityWeather = async () => {
      try {
        const geoCode = await axios.get(geoCoding);
        const { lat, lon } = geoCode.data[0];
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=9fe4e03a89fb27af07a9e51f7ab7746f`;
        const response = await axios.get(api);

        setTemp((response.data?.main.temp - 273).toFixed(2));
        setWeather(response.data?.weather[0].main);
        setIcon(response.data?.weather[0].icon);
        setName(response.data?.name);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
    };
    fetchCityWeather();
  }, [geoCoding]);

  return (
    <>
      {isError ? (
        <NoResults />
      ) : (
        <div className="weather-section">
          <div className="current-weather">
            <h2>{name}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              className="weather-icon"
            />
            <h2 className="temperature">
              {temp}
              <span>°C</span>
            </h2>
            <h5 className="description">{weather}</h5>
          </div>

          <div className="hourly-weather">
            <ul className="weather-list"></ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
