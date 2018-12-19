import React, { Component } from 'react';
import Button from './Button.jsx';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyCodes: [49, 50, 51, 52, 81, 87, 69, 82, 65, 83, 68, 70, 90, 88, 67, 86, 74, 75, 76],
      keySymbols: [1, 2, 3, 4, 'q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'z', 'x', 'c', 'v', 'j', 'k', 'l'],
      audioFiles: ["samples/clap.WAV", "samples/closed-hat.WAV", "samples/cowbell.WAV", 
        "samples/cymbal.WAV", "samples/kick.WAV", "samples/low-tom.WAV", 
        "samples/mid-tom.WAV", "samples/high-tom.WAV", "samples/open-hat.WAV", 
        "samples/snare.WAV", "samples/bass-stab.WAV", "samples/blip.WAV", 
        "samples/echo.WAV", "samples/nomsayn.WAV", "samples/pwa-pwa.WAV", 
        "samples/haht-of-venice.WAV", "samples/808-loop.WAV", "samples/bongo.WAV",
        "samples/house-loop.WAV"
      ],
    }
  }

  handleKeydown = (e) => {
    let code = e.keyCode || e.target.children[1].id || e.code;  
    let audio = document.getElementById(code);
    if (!audio) return;
    audio.controls = true;
    audio.currentTime = 0;
    audio.setAttribute('class', 'button-click');    
    audio.play()
  };

  // toggleLooper = (e) => {
  //   let code = e.keyCode //|| e.target.children[1].id;
  //   let audio = document.getElementById(code);
  //   let loop = document.getElementById("looper");
  //   loop.addEventListener("click", function() {
  //     audio.loop = true;      
  //   })
  //   console.log("loop is on");
  // }

  render() {
    window.addEventListener('keydown', this.handleKeydown);
    // window.addEventListener('click', this.handleKeydown);
    const buttons = [];
    for (var i = 0; i < this.state.keyCodes.length; i++) {
      buttons.push(
        <Button 
          id={i}
          key={i}
          keyCode={this.state.keyCodes[i]}
          keySymbol={this.state.keySymbols[i]}
          audioFile={this.state.audioFiles[i]}
          handleKeydown={this.handleKeydown}
        />
      )
    }
  
    return (
      <div id="app-container">
        {/* <div id="options">
          <Button id={i} className="loop-button" key="Loop" onClick={this.toggleLooper}/>
        </div> */}
        <div className="button-container">
          {buttons}
        </div>
      </div>
    );
  }
}

export default App;
