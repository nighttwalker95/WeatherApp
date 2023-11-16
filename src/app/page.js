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
  const [location, setLocation] = useState("Bucharest");

  return <div>React App</div>;
}
