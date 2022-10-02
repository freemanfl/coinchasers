import { useRef } from "react";

import "../Css/Player.css";


function Player(props) {

  const playerState = {
    height: 16,
    width: 16,
    x1: props.currentX,
    y1: props.currentY,
    x2: props.clickX,
    y2: props.clickY,
    speed: 100,
    right: 0,
    range: 100,
    angle: 5,
    
  };

  function handleMouseDown() {
    range.classList.add('player-range');
    trajectory.classList.add('display');
  }

  function handleMouseUp() {
    range.classList.remove('player-range');
    trajectory.classList.remove('display');
  }

  function handleMouseMove(e) {
    const posX = map.childNodes[0].offsetLeft;
    const posY = map.childNodes[0].offsetTop;
    console.log(posX, posY);
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    const dx = mouseX - posX;
    const dy = posY - mouseY;
    const theta_radians = Math.atan2(dy, dx);
    
    playerState.angle = theta_radians * 57.3;
    console.log();
  }

  function calculateTime(e) {
      const currentX = map.childNodes[0].offsetLeft;
      const currentY = map.childNodes[0].offsetTop;
      const mouseX = e.offsetX;
      const mouseY = e.offsetY;
      const dx = Math.abs(mouseX - currentX);
      const dy = Math.abs(mouseY - currentY);
      playerState.time =  Math.sqrt(dx*dx + dy*dy);
  
      // const delta_x = e.mouseOffsetX - posX;
      // const delta_y = posY - e.mouseOffsetY;
      // const theta_radians = Math.atan2(delta_y, delta_x)
      // console.log(theta_radians);
  }
  
  const playerRef = useRef();
  const range = document.getElementById('range');
  const trajectory = document.getElementById('trajectory');
  const map = document.getElementById('Map');

  function detectLeftButton(event) {
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
        return false;
    } else if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return (event.button === 1 || event.type === 'click');
    }
}
  //draw range for left click
  try {
    map.addEventListener('mousedown', (event) => {

    if (detectLeftButton(event) === true) {
      handleMouseDown();
      map.addEventListener('mousemove', handleMouseMove);
      
      map.addEventListener('mouseup', () => {
        handleMouseUp();
        map.removeEventListener('mousemove', handleMouseMove);
    
      });
    }
   })
  }
  catch(err) {
    
  }
 
  


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

      {/* player range               */}
      <div id="range"></div>

      {/* player skillshot trajectory               */}
      <div id="trajectory" className="player-trajectory"
        style={{
          width: playerState.range + "px",
          left: playerState.width + "px",
          top: -playerState.height + "px",
          transform: `rotate(${playerState.angle}deg)`,
          }}>

      </div>
    </div>
  );
}

export default Player;
