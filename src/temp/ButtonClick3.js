// x.play()
// x.pause()
// x.volume = 1

import React from "react";
import MangChungMusic from "../Music/ChinaMusic/Music/MangChung.mp3";
import AcMaMusic from "../Music/ChinaMusic/Music/AcMaDenTuThienDuong.mp3";
import XuatSonMusic from "../Music/ChinaMusic/Music/XuatSon.mp3";

class ButtonReact extends React.Component {
  render() {
    return <button onClick={ClickButton}>RJS2</button>;
  }
}

function ClickButton() {
  alert("click");
}

// function changeVolume(event) {
//     var masterGainNode = document.getElementById("mcaudio");
//     var volumeControl = document.getElementById("vl");
//     masterGainNode.gain.value = volumeControl.value
//   }

class ButtonInReactPage3 extends React.Component {
  render() {
    return (
      <div>
        Button in ReactJS.
        <br />
        <ButtonReact></ButtonReact>
        <br />
        Volume
        <div class="settingsBar">
          <div class="left">
            <span>Volume: </span>
            <input
              type="range"
              min="0.0"
              max="1.0"
              step="0.01"
              value="0.5"
              list="volumes"
              name="volume"
            />
            <datalist id="volumes">
              <option value="0.0" label="Mute" />
              <option value="1.0" label="100%" />
            </datalist>
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
            <input type="range" />
          </div>
        </div>
        <li>
          1. Mang Chủng (Âm khuyết Thi Thính) 芒種
          <audio
            visibility="hidden"
            id="mcaudio"
            class="player"
            gain="0"
            controls
            onTimeUpdate={() => {
              var x = document.getElementById("mcaudio");
              var y = document.getElementById("mcaudiotime");
              y.value = (1 * x.currentTime) / x.duration;
            }}
          >
            <source src={MangChungMusic} type="audio/mp3" />
          </audio>
        </li>
        <button
          onClick={() => {
            var x = document.getElementById("mcaudio");
            x.play();
          }}
        >
          Play music
        </button>
        <button
          onClick={() => {
            var x = document.getElementById("mcaudio");
            x.pause();
          }}
        >
          Pause music
        </button>
        <input
          type="range"
          min="0.0"
          max="1.0"
          step="0.01"
          list="mcaudiovl"
          name="mcaudiovl"
          id="mcaudiovl"
          onChange={() => {
            var x = document.getElementById("mcaudio");
            var y = document.getElementById("mcaudiovl");
            x.volume = y.value;
          }}
        />
        {/* duration
            currentTime
            onTimeUpdate */}
        <script>alert("hello");</script>
        <input
          type="range"
          min="0.0"
          max="1.0"
          step="0.01"
          defaultValue="0"
          list="mcaudiotime"
          name="mcaudiotime"
          id="mcaudiotime"
          onChange={() => {
            var x = document.getElementById("mcaudio");
            var y = document.getElementById("mcaudiotime");
            x.currentTime = y.value * x.duration;
            y.value = x.currentTime / x.duration;
          }}
        />
        <li>
          1. Mang Chủng (Âm khuyết Thi Thính) 芒種
          <audio id="mcaudio2" class="player" gain="0" controls>
            <source src={AcMaMusic} type="audio/mp3" />
          </audio>
        </li>
        <button
          onClick={() => {
            var y = document.getElementById("mcaudio2");
            y.play();
          }}
        >
          Play music
        </button>
        <button
          onClick={() => {
            var y = document.getElementById("mcaudio2");
            y.pause();
          }}
        >
          Pause music
        </button>
        <li>
          1. Mang Chủng (Âm khuyết Thi Thính) 芒種
          <audio id="mcaudio3" class="player" gain="0" controls>
            <source src={XuatSonMusic} type="audio/mp3" />
          </audio>
        </li>
        <button
          onClick={() => {
            var z = document.getElementById("mcaudio3");
            z.play();
          }}
        >
          Play music
        </button>
        <button
          onClick={() => {
            var z = document.getElementById("mcaudio3");
            z.pause();
          }}
        >
          Pause music
        </button>
      </div>
    );
  }
}

export default ButtonInReactPage3;

// alert with arrow function
