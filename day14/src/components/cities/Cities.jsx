import React, { useEffect, useState } from "react";
import axios from "axios";
import CityItem from "./CityItem";

const getData = () => {
  return axios.get(`http://localhost:3001/cities`);
};



const Cities = () => {
    const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)


  useEffect(() => {
    getData()
      // .then((res)=>console.log(res))
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <h1>Cities</h1>
      {data.map((city) => (
        <CityItem key={city.id} {...city}/>
      ))}
    </div>
  );
};

export default Cities;
