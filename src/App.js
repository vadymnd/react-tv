import React, { useState } from "react";
import MainScreen from "./MainScreen/MainScreen";
import Episode from "./Episode/Episode"
import "./App.css";

function App() {

  const [isMainScreen, setScreen] = useState(true);
  const [stringDate, setStringDate] = useState("20 Февраля 2020")
  const [apiUrl, setApiUrl] = useState(`https://api.tvmaze.com/schedule?country=US&date=2020-02-20`);

  return (
    <div className="App">

      <div className="header">
        Super Film
        {!isMainScreen
          ? <button className="header__back-btn" onClick={() => setScreen(!isMainScreen)} />
          : null
        }
      </div>

      {isMainScreen
        ? <MainScreen
          isMainScreen={isMainScreen}
          setScreen={setScreen}
          setApiUrl={setApiUrl}
          setStringDate={setStringDate}
        />
        : <Episode
          apiUrl={apiUrl}
          stringDate={stringDate}
        />}

    </div>
  );
};

export default App;
