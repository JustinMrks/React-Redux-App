import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";
import { connect } from "react-redux";
import { fetchWeather } from "./store/actions";
import WeatherForm from "./Components/WeatherForm";

const App = (props) => {
  const { fetchWeather } = props;

  useEffect(() => {
    fetchWeather(props.woeid);
  }, [fetchWeather, props.woeid]);

  console.log(props);

  return (
    <div className="App">
      <h1>{props.isLoading ? "Loading location" : props.weather.title}</h1>
      <WeatherForm />
      {props.isLoading ? (
        <h1>loading weather...</h1> /* if we wannna add spinner do so here */
      ) : (
        props.weather.consolidated_weather.map((forecast, index) => {
          return <WeatherCard key={index} forecast={forecast} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    woeid: state.woeid,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchWeather })(App);
