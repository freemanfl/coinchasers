import { useState, useRef } from "react";
import "../Css/Map.css";
import crossSvg from "../images/cross.svg";
import Player from "./Player";

function Map() {
  const mapRef = useRef();
  const [x2, setX2] = useState(200);
  const [y2, setY2] = useState(100);
  const cross = document.getElementById("cross-img");

  function getPlayerCoords(ref) {
    const playerOffsetLeft = ref.current.childNodes[0].offsetLeft;
    const playerOffsetTop = ref.current.childNodes[0].offsetTop;
    console.log(playerOffsetLeft, playerOffsetTop);
  }

  function animateCross() {
    console.log('rokoko');
    setTimeout(console.log('asss'), 20000);
  }

  function handleClick(e) {
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    const event_offsetX = (e.pageX - currentTargetRect.left).toFixed(2),
      event_offsetY = (e.pageY - currentTargetRect.top).toFixed(2);
    setX2(event_offsetX);
    setY2(event_offsetY);
    console.log(event_offsetX, event_offsetY);
    console.log(cross);
    animateCross();
  }

  return (
    <div
      id="Map"
      ref={mapRef}
      onContextMenu={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
    >
      <Player clickX={x2} clickY={y2} />
      {/* player click spot */}
      <div
        id="cross"
        style={{
          left: x2 - 3 + "px",
          top: y2 - 11 + "px",
        }}
      >
        <img id="cross-img" src={crossSvg} alt="as" />
      </div>
    </div>
  );
}

export default Map;
