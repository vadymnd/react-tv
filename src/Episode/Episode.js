import React, { useState } from "react"
import ListRender from "./ListRender"
import FetchApiData from "../FetchApiData/FetchApiData"

const Episode = ({ apiUrl, stringDate }) => {
  const [data, setData] = useState({});

  FetchApiData(apiUrl, setData)

  return (
    <div className="episodes">
      <div className="episodes__date">{stringDate}</div>
      <ul className="episodes__list">
        {<ListRender data={data} />}
      </ul>
    </div>
  );
};

export default Episode;