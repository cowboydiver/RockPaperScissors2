import "./App.css";
import { RPSButton } from "./components/rps-button";

function App() {
  return (
    <div id="play-area-wrapper">
      <div id="play-area">
        <div className="player-column">
          <RPSButton type="rock" />
          <RPSButton type="paper" />
          <RPSButton type="scissors" />
        </div>
        <div className="battlefield"></div>
        <div className="player-column">
          <RPSButton type="rock" />
          <RPSButton type="paper" />
          <RPSButton type="scissors" />
        </div>
      </div>
    </div>
  );
}

export default App;
