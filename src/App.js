import React, { useState } from "react";
import { animated, useSprings } from "react-spring";
import "./App.css";
import Tree from "./components/Tree";
import Basket from "./components/Basket";
import {
  Apple1,
  Apple2,
  Apple3,
  Apple4,
  Apple5,
  Apple6,
  Apple7,
} from "./components/Apples";

function App() {
  const apples = [
    <Apple1 key="apple-1" />,
    <Apple2 key="apple-2" />,
    <Apple3 key="apple-3" />,
    <Apple4 key="apple-4" />,
    <Apple5 key="apple-5" />,
    <Apple6 key="apple-6" />,
    <Apple7 key="apple-7" />,
  ];

  const [toggle, setToggle] = useState(false);
  const [collect, setCollect] = useState(0);
  const fallSprings = useSprings(
    apples.length,
    apples.map((_, i) => {
      const verticalPosition = [250, 380, 320, 200, 250, 310, 290];
      return {
        transform: toggle
          ? `translate3d(0px, ${verticalPosition[i]}px, 0px)`
          : `translate3d(0px, 0px, 0px)`,
        delay: i * 300 + 3000,
        animation: collect
          ? `topla${i+1} 1.5s 1 forwards`
          : null,
      };
    })
  );



  const animatedApples = fallSprings.map((animatedStyle, index) => (
    <animated.g
      key={index}
      style={animatedStyle}
      className={toggle ? "shake" : ""}
    >
      {apples[index]}
    </animated.g>
  ));

  return (
    <>
      <div className="button-wrapper">
        <button
          type="button"
          className="button"
          onClick={() => {
            if(toggle){
              window.location.reload();
            }
            else{
            setToggle(true);
            setTimeout(() => {
              setCollect(true)
            }, 6100);
          }
          }}
        >
         {!toggle ? "Collect The Apples" : "Restart"}
        </button>
      </div>
      <marquee className="marquee" scrolldelay="150">
      <img src={require("./assets/sheep.png")} className={"sheep"} />
      </marquee>
      <svg viewBox="0 0 1000 1000" width="100%" height="640">
        <g>
          <g
            fillRule="evenodd"
            stroke="#333"
            transform="translate(-1413.4 -34.747) scale(2.0616)"
          >
            <Tree className={toggle ? "shake" : ""} />
            {animatedApples}
            <Basket />
          </g>
        </g>
      </svg>
    </>
  );
}

export default App;
