import { useState, useRef, useEffect } from "react";

import "../Css/Player.css";
import playerImage from "../images/characters.png";
import playerShadow from "../images/shadow.png";

function Player(props) {
  function displayArrow() {}
  const playerRef = useRef();
  const playerState = {
    height: 16,
    width: 16,
    x1: 5,
    y1: 15,
    x2: props.clickX,
    y2: props.clickY,
    speed: 1,
    right: 0,
  };

  return (
    //player div
    <div
      className="player"
      ref={playerRef}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        left: playerState.x2 - playerState.width / 2 + 2 + "px",
        top: playerState.y2 - playerState.height - 5 + "px",
        transition: `all 2s linear`,
      }}
    >
      {/* //player sprite  */}
      <div
        style={{
          backgroundPosition: `-16px -0px`,
        }}
        className="player-sprite"
      ></div>

      {/* player shadow               */}
      <div className="player-shadow"></div>
    </div>
  );
}

export default Player;
