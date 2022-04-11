// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [score,scoreCount]=React.useState(76);
  const [wicket,wicketCount]=React.useState(2);
  const [ball,ballCount]=React.useState(50);




  const handleIncreament =(value)=>{
    scoreCount(score+value);
  }

  const handleWicketIncreament =(value)=>{
    wicketCount(wicket+value);
  }

  const handleBallIncreament =(value)=>{
    ballCount(ball+value);
  }
  
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              <div>
                <h3>{score}</h3>
              </div>
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              <div>
                <h3>{wicket}</h3>
              </div>
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>handleIncreament(1)} className="addScore1">Add 1</button>
        <button onClick={()=>handleIncreament(4)} className="addScore4">Add 4</button>
        <button onClick={()=>handleIncreament(6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handleWicketIncreament(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleBallIncreament(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
