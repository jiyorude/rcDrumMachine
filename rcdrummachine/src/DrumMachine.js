import React from "react";
import "./drummachine.min.css";

function DrumMachine() {
  return (
    <div className="backgroundWrapper">
      <div className="flexWrapper">
        <div id="drum-machine">
          <div id="display">
            <p className="nowPlaying">
              NOW PLAYING:<span className="play">HI-HAT</span>
            </p>
          </div>
          <div id="buttons">
            <div className="row">
              <button id="Q" className="drum-pad">
                Q
              </button>
              <button id="W" className="drum-pad">
                W
              </button>
              <button id="E" className="drum-pad">
                E
              </button>
            </div>
            <div className="row">
              <button id="A" className="drum-pad">
                A
              </button>
              <button id="S" className="drum-pad">
                S
              </button>
              <button id="D" className="drum-pad">
                D
              </button>
            </div>
            <div className="row">
              <button id="Z" className="drum-pad">
                Z
              </button>
              <button id="X" className="drum-pad">
                X
              </button>
              <button id="C" className="drum-pad">
                C
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
