import { useState, useRef } from "react";
import "../Css/Map.css";
import Player from "./Player";

function Map() {
  const mapRef = useRef();
  const [x2, setX2] = useState(200);
  const [y2, setY2] = useState(100);

  const cross = document.getElementById("cross");

  
 function getPlayerCoords(ref) {
      const playerOffsetLeft = ref.current.childNodes[0].offsetLeft;
      const playerOffsetTop = ref.current.childNodes[0].offsetTop;
      const playerCoords = [playerOffsetLeft, playerOffsetTop];
      console.log(playerCoords[1]);
      return(playerCoords)
  }
 

  function animateCross() {
    try {
      cross.style.display = 'block';
      setTimeout(() => {
        cross.style.display = 'none';
      }, "50")
    }
    catch(err) {
    
    }


  }

  function handleClick(e) {
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    const event_offsetX = (e.pageX - currentTargetRect.left).toFixed(2),
      event_offsetY = (e.pageY - currentTargetRect.top).toFixed(2);
    setX2(event_offsetX);
    setY2(event_offsetY);
    
  }



  return (
    <div
      id="Map"
      ref={mapRef}
      onContextMenu={(e) => {
        e.preventDefault();
        handleClick(e);
        animateCross();
      }}
    >
      <Player clickX={x2} clickY={y2} />
      {/* player click spot */}
      <div
        id="cross"
        style={{
          left: x2 - 3 + "px",
          top: y2 - 4 + "px",
        }}
      >

      </div>
    </div>
  );
}

export default Map;
