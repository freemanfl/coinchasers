import { useState,useRef,useEffect } from 'react';

import "../Css/Player.css";
import playerImage from "../images/characters.png";
import playerShadow from "../images/shadow.png";



function Player(props) {
  console.log(props.state);
  const refPlayer = useRef(5);

  const player = props;
  

  return (
    //player div
    <div className="player" ref={refPlayer} onContextMenu={(e)=> e.preventDefault()} 
         style={{left: player.clickX + "px", top: player.clickY + "px", borderRadius: "15px", 
                transition: `all ${player.time}s linear`,
         }}>

          {/* //player sprite  */}
          <div style={{width: player.width, height: player.height,
                      transition: `none`,
                      backgroundImage: `url(${playerImage})`, backgroundPosition: `-${player.height*player.right}px -${player.width*0}px`, 
                      }} className="player-sprite">

          </div>
          {/* player shadow               */}
          <div style={{width: player.width, height: player.height , position: "absolute", bottom: '-9px',
                      backgroundImage: `url(${playerShadow})`, backgroundPosition: "center", zIndex: 10,
                      }}>

          </div> 
              {/* <div className="range" style={{position: "absolute", width: "60px", height: "60px", 
                                            bordeRadius: "30px", border: "1px solid white",
                                            top: "-30px", left: "-24px",   
                                           }}>

              </div> */}
            
        
          {/* player shadow sprite
          */}
      </div>

  );
}

export default Player;
