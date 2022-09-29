import { useState, useEffect } from 'react';
import "../Css/Map.css";
import Player from "./Player";



function Map() {


const [cX, setCx] = useState(5);
const [cY, setCy] = useState(50);



const [playerState, setPlayerState] = useState({
    width: 16,
    height: 16,
    x1: 15,
    y1: 60,
    x2: 3,
    y2: 30,
    speed: 100,
    right: 0,
    time: 3,
})


  function handleClick(event) { 
    //calculate x and y coords.
    let currentTargetRect = event.currentTarget.getBoundingClientRect();
          setPlayerState(5);
          
    };







  return (
    <div id="Map" onContextMenu={(e)=> {e.preventDefault(); handleClick(e)}}>

        <Player state={playerState}/>

    </div>
  );
}

export default Map;
