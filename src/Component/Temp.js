import React, { useEffect, useState } from "react";
import "../CSS/Temp.css";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q= ${search}&units=metric&appid=23590aa5abfaeb8872e86f5809db3626`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  });

  return (
    <>
      <div className="box">
        <div className="input">
          <input
            type="text"
            value={search}
            placeholder="Srearch"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div>
          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div>
              <div>
                <h1>{search}</h1>
                <h2>{city.temp}°C</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Temp;
