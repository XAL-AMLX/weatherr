import React, { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState("Temperature");

  console.log(location);
  console.log(data);

  function handleLocationSubmit(e) {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: location,
        contentType: "csv",
        unitGroup: "us",
        shortColumnNames: "0",
      },
      headers: {
        "X-RapidAPI-Key": "c7b93967afmsh5f9d0cd46068f02p186931jsn01860cec8ba2",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.split(",")[34]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <div>
        <form>
          <label>
            City Name:
            <input
              type="text"
              name="climate-loc"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" onClick={handleLocationSubmit} />
        </form>
        <button>{data}</button>
      </div>
    </div>
  );
}

export default App;
