import React from 'react';

import MangChungMusic from '../Music/ChinaMusic/Music/MangChung.mp3';

function BasicPlayer() {
    return (
        <div>
        
            <input  type="range" min="0.0" max="1.0" step="0.01"
                    list="mcaudiovl" name="mcaudiovl" id="mcaudiovl" 
                    onChange={ () => {
                                var x = document.getElementById("mcaudio"); 
                                var y = document.getElementById("mcaudiovl"); 
                                x.volume = y.value;
                            }
                        }
            />

            <input  type="range" min="0.0" max="1.0" step="0.01" defaultValue="0"
                    list="mcaudiotime" name="mcaudiotime" id="mcaudiotime" 
                    onChange={ () => {
                                var x = document.getElementById("mcaudio"); 
                                var y = document.getElementById("mcaudiotime"); 
                                x.currentTime = (y.value * x.duration); 
                                y.value =  x.currentTime/x.duration
                            }
                        }
            />


            <audio  visibility="hidden" id="mcaudio" class="player" gain="0" 
                    controls onTimeUpdate={ () => {
                            var x = document.getElementById("mcaudio"); 
                            var y = document.getElementById("mcaudiotime"); 
                            y.value = 1*x.currentTime/x.duration;
                            }
                        }
            > 
                <source src={MangChungMusic} type="audio/mp3"/>
            </audio>


            <button onClick={ () => {
                        var x = document.getElementById("mcaudio"); 
                        x.play();
                        }
                    }
            >
                Play music
            </button>

            <button onClick={ () => {
                        var x = document.getElementById("mcaudio"); 
                        x.pause();
                        }
                    }
            >
                Pause music
            </button>

    </div>
    );
};

export default BasicPlayer;