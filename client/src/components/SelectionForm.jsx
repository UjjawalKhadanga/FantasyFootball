import React,{useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";
import axios from "axios";

export default function SelectionForm() {
    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(100);
    const handleInput = (e) => {
      set_minValue(e.minValue);
      set_maxValue(e.maxValue);
    };



  return (
    <div className="player-selector m-3 border border-2 border-dark p-0 col-3 d-flex flex-column justify-content-center align-items-center">
      <h5 className="mt-3">Select Players</h5>

      <form>
      <div class="mb-3 w-100">
        <label for="player-position" class="form-label">
          Position
        </label>
        <select id="player-position" class="form-select">
          <option>forward</option>
          <option>midfielder</option>
          <option>defender</option>
          <option>goalkeeper</option>
        </select>
      </div>
        <label for="player-cost" class="form-label">
          Cost
        </label>
      <div className="w-100 mb-3">
        <MultiRangeSlider
          min={0}
          max={10}
          step={1}
          ruler={false}
          label={true}
          preventWheel={false}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>

        <div className="mb-3">
          <label htmlFor="player-name" className="form-label">
            Name
          </label>
          <input
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
  );
}
