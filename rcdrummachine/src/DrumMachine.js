import React from "react";
import "./drummachine.min.css";
import { useState } from "react";

function DrumMachine() {
  const [currSample, setSample] = useState("-");

  let sampleGrid = {
    Q: "KICK",
    W: "KICK 'N HAT",
    E: "HI-HAT",
    A: "HEATER",
    S: "HEATER #2",
    D: "HEATER #3",
    Z: "HEATER #4",
    X: "CLOSED HI-HAT",
    C: "CLAP",
  };

  let handleClickEvent = (id) => {
    setSample(sampleGrid[id]);
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
  };

  return (
    <div className="backgroundWrapper">
      <div className="flexWrapper">
        <div id="drum-machine">
          <div id="display">
            <p className="nowPlaying">
              NOW PLAYING:<span className="play">{currSample}</span>
            </p>
          </div>
          <div id="buttons">
            <div className="row">
              <button onClick={() => handleClickEvent("Q")} id="kick" className="drum-pad">
                <audio src="./audio/Kick.mp3" className="clip" id="Q"></audio>Q
              </button>
              <button onClick={() => handleClickEvent("W")} id="kickHat" className="drum-pad">
                <audio src="./audio/Kick-n-hat.mp3" className="clip" id="W"></audio>W
              </button>
              <button onClick={() => handleClickEvent("E")} id="hiHat" className="drum-pad">
                <audio src="./audio/Hi-Hat.mp3" className="clip" id="E"></audio>E
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleClickEvent("A")} id="heater" className="drum-pad">
                <audio src="./audio/Heater.mp3" className="clip" id="A"></audio>A
              </button>
              <button onClick={() => handleClickEvent("S")} id="heaterTwo" className="drum-pad">
                <audio src="./audio/Heater-two.mp3" className="clip" id="S"></audio>S
              </button>
              <button onClick={() => handleClickEvent("D")} id="heaterThree" className="drum-pad">
                <audio src="./audio/Heater-three.mp3" className="clip" id="D"></audio>D
              </button>
            </div>
            <div className="row">
              <button onClick={() => handleClickEvent("Z")} id="heaterFour" className="drum-pad">
                <audio src="./audio/Heater-four.mp3" className="clip" id="Z"></audio>Z
              </button>
              <button onClick={() => handleClickEvent("X")} id="closedHiHat" className="drum-pad">
                <audio src="./audio/Closed-HiHat.mp3" className="clip" id="X"></audio>X
              </button>
              <button onClick={() => handleClickEvent("C")} id="clap" className="drum-pad">
                <audio src="./audio/Clap.mp3" className="clip" id="C"></audio>C
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
