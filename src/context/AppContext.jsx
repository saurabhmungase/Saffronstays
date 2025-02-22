// http://116.75.62.44:5000/tents
// http://116.75.62.44:5000/homestays
// http://116.75.62.44:5000/hotels

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let context = createContext();

const AppContext = ({children}) => {
    const [tents, setTents] = useState([]);
    const [homestays, setHomestays] = useState([]);
    const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get("http://116.75.62.44:5000/tents").then((res) => {
      setTents(res.data);
    });
    axios.get("http://116.75.62.44:5000/homestays"  ).then((res) => {
      setHomestays(res.data);
    });
    axios.get("http://116.75.62.44:5000/hotels").then((res) => {
      setHotels(res.data);
    });
  }, []);

  return (
    <context.Provider value={{tents, homestays, hotels} }>{children}</context.Provider>
  )
};

export default AppContext;
