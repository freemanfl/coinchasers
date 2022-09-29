import { useState, useRef } from "react";
import "../Css/Map.css";
import Player from "./Player";

function Map() {
  const mapRef = useRef();

  function getPlayerCoords(ref) {
    const playerOffsetLeft = ref.current.childNodes[0].offsetLeft;
    const playerOffsetTop = ref.current.childNodes[0].offsetTop;
    console.log(playerOffsetLeft, playerOffsetTop);
  }

  function handleClick(e) {
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    const event_offsetX = (e.pageX - currentTargetRect.left).toFixed(2),
      event_offsetY = (e.pageY - currentTargetRect.top).toFixed(2);
    console.log(event_offsetX, event_offsetY);
    getPlayerCoords(mapRef);
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
      <Player />
    </div>
  );
}

export default Map;
