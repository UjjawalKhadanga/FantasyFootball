import React,{useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";
import PlayerSearchResultsDisplay from "./PlayerSearchResultsDisplay";
import axios from "axios";


export default function PlayerSelector(props) {
  // SearchResults state
  const [searchResults, setSearchResults] = useState({"result":[]});
  // States
  const [playerName, setPlayerName] = useState("");
  const [playerPos, setPlayerPos] = useState("FWD");
  const [minCost, set_minCost] = useState(0);
  const [maxCost, set_maxCost] = useState(200);



  const handleCostInput = (e) => {
    set_minCost(e.minValue);
    set_maxCost(e.maxValue);
  };

  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  }
  const handlePlayerPos = (e) => {
    setPlayerPos(e.target.value);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post('http://localhost:8080/search/', {
        playerName,
        playerPos,
        minCost,
        maxCost
      })
    const data=response.data;
    setSearchResults({...data});
  }

  return (
    <>
      <div className="player-selector m-3 border border-2 border-dark p-0 d-flex flex-column justify-content-center align-items-center">
        <h5 className="mt-3">Select Players</h5>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3 w-100">
            <label for="player-position" className="form-label">
              Position
            </label>
            <select value={playerPos} onChange={handlePlayerPos} id="player-position" className="form-select">
              <option>FWD</option>
              <option>MID</option>
              <option>DFR</option>
              <option>GKP</option>
            </select>
          </div>
          <label for="player-cost" class="form-label">
            Cost
          </label>
          <div className="w-100 mb-3">
            <MultiRangeSlider
              min={0}
              max={200}
              step={1}
              ruler={false}
              label={true}
              preventWheel={false}
              minValue={minCost}
              maxValue={maxCost}
              onInput={(e) => {
                handleCostInput(e);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="player-name" className="form-label">
              Name
            </label>
            <input
              value={playerName}
              onChange={handlePlayerName}
              type="search"
              className="form-control"
              id="player-name"
              aria-describedby="player"
              name="name"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3 w-100">
            Search
          </button>
        </form>
  
      </div>
      <PlayerSearchResultsDisplay searchResults={searchResults} p_selected={props.p_selected}/>
    </>
  );
}
