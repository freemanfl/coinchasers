import { useState, useRef, useEffect } from "react";

import "../Css/Player.css";
import playerImage from "../images/characters.png";
import playerShadow from "../images/shadow.png";

function Player(props) {
  const playerRef = useRef();

  return (
    //player div
    <div
      className="player"
      ref={playerRef}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        left: 130 + "px",
        top: 301 + "px",
        transition: `all 2s linear`,
      }}
    >
      {/* //player sprite  */}
      <div
        style={{
          width: 16,
          height: 16,
          transition: `none`,
          backgroundImage: `url(${playerImage})`,
          backgroundPosition: `-16px -0px`,
        }}
        className="player-sprite"
      ></div>
      {/* player shadow               */}
      <div
        style={{
          width: "16px",
          height: "16px",
          position: "absolute",
          bottom: "-9px",
          backgroundImage: `url(${playerShadow})`,
          backgroundPosition: "center",
          zIndex: 10,
        }}
      ></div>
    </div>
  );
}

export default Player;
