"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";

const APIKey = "4cdafd10eafff3dd0d3fab8ab517d5d7";

export default function Home() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("London");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`;

    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);
  console.log(data);

  if (!data) {
    return (
      <div>
        <ImSpinner8 className=" text-5xl animate-spin" />
      </div>
    );
  }

  let icon;

  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy />;
      break;
    case "Clear":
      icon = <IoMdSunny />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill />;
      break;
    case "Snow":
      icon = <IoMdSnow />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }

  return <div className=" text-6xl">{icon}</div>;
}
