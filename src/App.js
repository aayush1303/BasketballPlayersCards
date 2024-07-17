import React from "react";
import BasketballPlayerCard from "./Components/BasketballPlayerCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="page-heading">Legends of the Court</h1>
      <div className="players">
        <BasketballPlayerCard
          name="LeBron James"
          image="https://cdn.nba.com/manage/2023/03/GettyImages-1249539909-scaled.jpg"
          position="Forward"
          stats={{
            pointsPerGame: 25.4,
            assistsPerGame: 7.1,
            reboundsPerGame: 10.5
          }}
        />
        <BasketballPlayerCard
          name="Kevin Durant"
          image="https://cdn.vox-cdn.com/thumbor/5FPZQ3MU4wtkXuaR-y2uS6HMmaI=/0x0:8256x5504/1200x800/filters:focal(3437x1644:4757x2964)/cdn.vox-cdn.com/uploads/chorus_image/image/73226893/2095090581.0.jpg"
          position="Forward"
          stats={{
            pointsPerGame: 27.1,
            assistsPerGame: 5.2,
            reboundsPerGame: 7.1
          }}
        />
        <BasketballPlayerCard
          name="Stephen Curry"
          image="https://media.cnn.com/api/v1/images/stellar/prod/230501084147-02-steph-curry-warriors-kings-043023.jpg?c=original"
          position="Guard"
          stats={{
            pointsPerGame: 30.1,
            assistsPerGame: 6.7,
            reboundsPerGame: 5.2
          }}
        />
        <BasketballPlayerCard
          name="Kobe Bryant"
          image="https://ew.com/thmb/XoWCPkHqWW_fgYYutiw9ugmthbw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kobe-bryant-0d4dffb9eac446ec8aa5a5536f6ca1ff.jpg"
          position="Forward"
          stats={{
            pointsPerGame: 28.8,
            assistsPerGame: 5.9,
            reboundsPerGame: 11.4
          }}
        />
      </div>
    </div>
  );
}

export default App;
