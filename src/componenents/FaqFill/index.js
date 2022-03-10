import React from "react";
import Tower from './towers.jpg';
import LearnKey from './learnKey.jpg';
import Cable from './cable.jpg';

function FaqFill() {
  return (
    <div>

    <div >
        <img className="img" src={Tower} alt="tower"></img>
        <img className="img" src={LearnKey} alt="learnKey"></img>
        <img className="img" src={Cable} alt="computerCable"></img>
        </div>
 
    </div>
  );
}

export default FaqFill;