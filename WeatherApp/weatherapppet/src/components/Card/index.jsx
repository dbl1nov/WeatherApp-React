import React from "react";
import "../../App.css";
import { useWeather } from "../../hooks/useWeather";

export const Card = ({ city }) => {
  const data = useWeather(city);
  if (!data) return null;
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;
  return (
    <div className="Card">
      <div className="MainInfo">
        <img
          className="Icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <h1 className="Title">{name}</h1>
        <p className="Description">{description}</p>
        <p className="Temperature">{temp.toFixed()}</p>
      </div>
      <div className="Information">
        <div>Влажность: {humidity}</div>
        <div className="feelslike">По ощущениям: {feels_like.toFixed()}</div>
      </div>
    </div>
  );
};
 